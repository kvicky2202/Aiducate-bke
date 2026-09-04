import prisma from '../config/db.js';
import fs from 'fs';
import { parseJson, toJson } from '../utils/json.js';
import { assertStudentEnrolled } from '../utils/enrollment.js';
import { shapeUser, shapeClassMaterial } from '../utils/serializers.js';

const BANNER_COLORS = [
  'from-primary to-secondary',
  'from-tertiary to-purple-600',
  'from-secondary to-primary',
];

function generateJoinCode() {
  const alphabet = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
  let code = '';
  for (let i = 0; i < 6; i++) {
    code += alphabet[Math.floor(Math.random() * alphabet.length)];
  }
  return code;
}

async function uniqueJoinCode() {
  for (let attempt = 0; attempt < 10; attempt++) {
    const code = generateJoinCode();
    const existing = await prisma.classroom.findUnique({ where: { code } });
    if (!existing) return code;
  }
  return `C${Date.now().toString(36).toUpperCase().slice(-6)}`;
}

export const listClasses = async (req, res) => {
  try {
    const where = {};
    if (req.query.code) where.code = String(req.query.code).toUpperCase();
    if (req.query.teacherId) where.teacherId = String(req.query.teacherId);
    const classes = await prisma.classroom.findMany({ where });
    res.json(classes);
  } catch (error) {
    console.error('listClasses', error);
    res.status(500).json({ message: 'Failed to load classes.' });
  }
};

export const getClassById = async (req, res) => {
  try {
    const classData = await prisma.classroom.findUnique({ where: { id: req.params.id } });
    if (!classData) return res.status(404).json({ message: 'Class not found.' });
    res.json(classData);
  } catch (error) {
    console.error('getClassById', error);
    res.status(500).json({ message: 'Failed to load class.' });
  }
};

export const createClass = async (req, res) => {
  try {
    const { teacherId, name, section, subject, schedule, bannerColor } = req.body || {};

    if (!teacherId || !name || !section || !subject) {
      return res.status(400).json({
        message: 'teacherId, name, section, and subject are required.',
      });
    }

    const teacher = await prisma.user.findUnique({ where: { id: teacherId } });
    if (!teacher) return res.status(404).json({ message: 'Teacher not found.' });
    if (teacher.role !== 'teacher') {
      return res.status(403).json({ message: 'Only teachers can create classes.' });
    }

    const code = await uniqueJoinCode();
    const classroom = await prisma.classroom.create({
      data: {
        id: `cls-${Date.now()}`,
        code,
        name,
        section,
        subject,
        teacherId: teacher.id,
        teacherName: teacher.name,
        studentCount: 0,
        bannerColor: bannerColor || BANNER_COLORS[Math.floor(Math.random() * BANNER_COLORS.length)],
        schedule: schedule || '',
        progress: 0,
      },
    });

    const createdClassIds = parseJson(teacher.createdClassIds, []);
    if (!createdClassIds.includes(classroom.id)) {
      createdClassIds.push(classroom.id);
      await prisma.user.update({
        where: { id: teacher.id },
        data: { createdClassIds: toJson(createdClassIds) },
      });
    }

    res.status(201).json(classroom);
  } catch (error) {
    console.error('createClass', error);
    res.status(500).json({ message: 'Failed to create class.' });
  }
};

/** Student joins with the shared class code (Google Classroom style). */
export const joinClassByCode = async (req, res) => {
  try {
    const { userId, code } = req.body || {};

    if (!userId || !code) {
      return res.status(400).json({ message: 'userId and code are required.' });
    }

    const user = await prisma.user.findUnique({ where: { id: userId } });
    if (!user) return res.status(404).json({ message: 'User not found.' });
    if (user.role !== 'student') {
      return res.status(403).json({ message: 'Only students can join a class with a code.' });
    }

    const classroom = await prisma.classroom.findUnique({
      where: { code: String(code).trim().toUpperCase() },
    });
    if (!classroom) {
      return res.status(404).json({ message: 'Invalid class code.' });
    }

    const enrolledClassIds = parseJson(user.enrolledClassIds, []);
    if (enrolledClassIds.includes(classroom.id)) {
      return res.json({
        alreadyJoined: true,
        class: classroom,
        user: shapeUser(user),
      });
    }

    enrolledClassIds.push(classroom.id);
    const [updatedUser, updatedClass] = await prisma.$transaction([
      prisma.user.update({
        where: { id: userId },
        data: { enrolledClassIds: toJson(enrolledClassIds) },
      }),
      prisma.classroom.update({
        where: { id: classroom.id },
        data: { studentCount: { increment: 1 } },
      }),
    ]);

    res.status(201).json({
      alreadyJoined: false,
      class: updatedClass,
      user: shapeUser(updatedUser),
    });
  } catch (error) {
    console.error('joinClassByCode', error);
    res.status(500).json({ message: 'Failed to join class.' });
  }
};

/** Student leaves a class they previously joined. */
export const leaveClass = async (req, res) => {
  try {
    const { userId, classId } = req.body || {};

    if (!userId || !classId) {
      return res.status(400).json({ message: 'userId and classId are required.' });
    }

    const user = await prisma.user.findUnique({ where: { id: userId } });
    if (!user) return res.status(404).json({ message: 'User not found.' });
    if (user.role !== 'student') {
      return res.status(403).json({ message: 'Only students can leave a class.' });
    }

    const classroom = await prisma.classroom.findUnique({ where: { id: classId } });
    if (!classroom) return res.status(404).json({ message: 'Class not found.' });

    const enrolledClassIds = parseJson(user.enrolledClassIds, []);
    if (!enrolledClassIds.includes(classId)) {
      return res.status(400).json({ message: 'Student is not enrolled in this class.' });
    }

    const nextIds = enrolledClassIds.filter((id) => id !== classId);
    const [updatedUser, updatedClass] = await prisma.$transaction([
      prisma.user.update({
        where: { id: userId },
        data: { enrolledClassIds: toJson(nextIds) },
      }),
      prisma.classroom.update({
        where: { id: classId },
        data: { studentCount: Math.max(0, classroom.studentCount - 1) },
      }),
    ]);

    res.json({
      left: true,
      class: updatedClass,
      user: shapeUser(updatedUser),
    });
  } catch (error) {
    console.error('leaveClass', error);
    res.status(500).json({ message: 'Failed to leave class.' });
  }
};

export const listClassMaterials = async (req, res) => {
  try {
    const classId = req.query.classId ? String(req.query.classId) : null;
    const studentId = req.query.studentId ? String(req.query.studentId) : null;

    if (studentId && classId) {
      const enrollment = await assertStudentEnrolled(studentId, classId);
      if (!enrollment.ok) {
        return res.status(enrollment.status).json({ message: enrollment.message });
      }
    }

    const where = {};
    if (classId) where.classId = classId;
    const materials = await prisma.classMaterial.findMany({ where });
    res.json(materials.map(shapeClassMaterial));
  } catch (error) {
    console.error('listClassMaterials', error);
    res.status(500).json({ message: 'Failed to load materials.' });
  }
};

/** Teacher uploads a PDF (or creates a material record) for a class. */
export const createClassMaterial = async (req, res) => {
  try {
    const classId = req.body.classId;
    const title = req.body.title;
    const summary = req.body.summary || '';
    const uploadedById = req.body.uploadedById || req.body.teacherId;

    if (!classId || !title) {
      return res.status(400).json({ message: 'classId and title are required.' });
    }

    const classroom = await prisma.classroom.findUnique({ where: { id: classId } });
    if (!classroom) return res.status(404).json({ message: 'Class not found.' });

    if (uploadedById) {
      const teacher = await prisma.user.findUnique({ where: { id: uploadedById } });
      if (!teacher) return res.status(404).json({ message: 'Teacher not found.' });
      if (teacher.role !== 'teacher') {
        return res.status(403).json({ message: 'Only teachers can upload class materials.' });
      }
      if (classroom.teacherId !== teacher.id) {
        return res.status(403).json({ message: 'You can only upload materials to your own classes.' });
      }
    }

    const today = new Date().toISOString().slice(0, 10);
    const material = await prisma.classMaterial.create({
      data: {
        id: `mat-${Date.now()}`,
        classId,
        title,
        summary,
        uploadedAt: today,
        uploadedById: uploadedById || classroom.teacherId,
        fileName: req.file?.originalname || null,
        filePath: req.file?.path || null,
        mimeType: req.file?.mimetype || null,
      },
    });

    res.status(201).json(shapeClassMaterial(material));
  } catch (error) {
    console.error('createClassMaterial', error);
    res.status(500).json({ message: error.message || 'Failed to upload material.' });
  }
};

/** Teacher deletes a class material and its PDF file from disk. */
export const deleteClassMaterial = async (req, res) => {
  try {
    const id = req.params.id;
    const teacherId = req.body?.teacherId || req.query?.teacherId;

    const material = await prisma.classMaterial.findUnique({ where: { id } });
    if (!material) return res.status(404).json({ message: 'Material not found.' });

    const classroom = await prisma.classroom.findUnique({ where: { id: material.classId } });
    if (!classroom) return res.status(404).json({ message: 'Class not found.' });

    if (teacherId) {
      const teacher = await prisma.user.findUnique({ where: { id: teacherId } });
      if (!teacher) return res.status(404).json({ message: 'Teacher not found.' });
      if (teacher.role !== 'teacher') {
        return res.status(403).json({ message: 'Only teachers can delete materials.' });
      }
      if (classroom.teacherId !== teacher.id) {
        return res.status(403).json({ message: 'You can only delete materials from your own classes.' });
      }
    }

    if (material.filePath && fs.existsSync(material.filePath)) {
      try {
        fs.unlinkSync(material.filePath);
      } catch (unlinkErr) {
        console.error('deleteClassMaterial unlink failed:', unlinkErr.message);
      }
    }

    await prisma.$transaction([
      prisma.assignment.updateMany({
        where: { materialId: id },
        data: { materialId: null },
      }),
      prisma.classMaterial.delete({ where: { id } }),
    ]);

    res.json({ deleted: true, id });
  } catch (error) {
    console.error('deleteClassMaterial', error);
    res.status(500).json({ message: 'Failed to delete material.' });
  }
};
