import prisma from '../config/db.js';
import { toJson } from '../utils/json.js';
import {
  shapeAssignmentQuiz,
  shapeAssignmentResult,
} from '../utils/serializers.js';

export const listAssignments = async (req, res) => {
  try {
    const where = {};
    if (req.query.classId) where.classId = String(req.query.classId);
    const assignments = await prisma.assignment.findMany({ where });
    res.json(assignments);
  } catch (error) {
    console.error('listAssignments', error);
    res.status(500).json({ message: 'Failed to load assignments.' });
  }
};

export const getAssignmentById = async (req, res) => {
  try {
    const assignment = await prisma.assignment.findUnique({
      where: { id: req.params.id },
    });
    if (!assignment) return res.status(404).json({ message: 'Assignment not found.' });
    res.json(assignment);
  } catch (error) {
    console.error('getAssignmentById', error);
    res.status(500).json({ message: 'Failed to load assignment.' });
  }
};

export const patchAssignment = async (req, res) => {
  try {
    const allowed = ['status', 'score', 'submissionCount', 'title', 'dueDate', 'totalPoints'];
    const data = {};
    for (const key of allowed) {
      if (req.body[key] !== undefined) data[key] = req.body[key];
    }
    const assignment = await prisma.assignment.update({
      where: { id: req.params.id },
      data,
    });
    res.json(assignment);
  } catch (error) {
    console.error('patchAssignment', error);
    res.status(500).json({ message: 'Failed to update assignment.' });
  }
};

export const listAssignmentQuizzes = async (req, res) => {
  try {
    const where = {};
    if (req.query.assignmentId) where.assignmentId = String(req.query.assignmentId);
    const sets = await prisma.assignmentQuiz.findMany({ where });
    res.json(sets.map(shapeAssignmentQuiz));
  } catch (error) {
    console.error('listAssignmentQuizzes', error);
    res.status(500).json({ message: 'Failed to load assignment quizzes.' });
  }
};

/** Student submits their assignment result. */
export const postAssignmentResult = async (req, res) => {
  try {
    const { assignmentId, studentId, score, answers, status } = req.body || {};

    if (!assignmentId || !studentId || score === undefined) {
      return res.status(400).json({
        message: 'assignmentId, studentId, and score are required.',
      });
    }

    const [assignment, student] = await Promise.all([
      prisma.assignment.findUnique({ where: { id: assignmentId } }),
      prisma.user.findUnique({ where: { id: studentId } }),
    ]);

    if (!assignment) return res.status(404).json({ message: 'Assignment not found.' });
    if (!student) return res.status(404).json({ message: 'Student not found.' });
    if (student.role !== 'student') {
      return res.status(403).json({ message: 'Only students can submit assignment results.' });
    }

    const existing = await prisma.assignmentResult.findUnique({
      where: {
        assignmentId_studentId: { assignmentId, studentId },
      },
    });

    const payload = {
      studentName: student.name,
      score: Number(score),
      totalPoints: assignment.totalPoints,
      answers: toJson(answers || []),
      status: status || 'submitted',
    };

    let result;
    if (existing) {
      result = await prisma.assignmentResult.update({
        where: { id: existing.id },
        data: payload,
      });
    } else {
      result = await prisma.assignmentResult.create({
        data: {
          id: `ares-${Date.now()}`,
          assignmentId,
          studentId,
          ...payload,
        },
      });
      await prisma.assignment.update({
        where: { id: assignmentId },
        data: { submissionCount: { increment: 1 } },
      });
    }

    res.status(existing ? 200 : 201).json(shapeAssignmentResult(result));
  } catch (error) {
    console.error('postAssignmentResult', error);
    res.status(500).json({ message: 'Failed to submit assignment result.' });
  }
};

/**
 * Teacher (or student viewing own) lists assignment results.
 * Filters: assignmentId, classId, studentId
 */
export const listAssignmentResults = async (req, res) => {
  try {
    const { assignmentId, classId, studentId } = req.query;
    const where = {};

    if (assignmentId) {
      where.assignmentId = String(assignmentId);
    } else if (classId) {
      const assignments = await prisma.assignment.findMany({
        where: { classId: String(classId) },
        select: { id: true },
      });
      where.assignmentId = { in: assignments.map((a) => a.id) };
    }

    if (studentId) where.studentId = String(studentId);

    const results = await prisma.assignmentResult.findMany({
      where,
      orderBy: { submittedAt: 'desc' },
    });

    res.json(results.map(shapeAssignmentResult));
  } catch (error) {
    console.error('listAssignmentResults', error);
    res.status(500).json({ message: 'Failed to load assignment results.' });
  }
};
