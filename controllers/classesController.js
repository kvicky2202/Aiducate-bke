import prisma from '../config/db.js';

export const listClasses = async (req, res) => {
  try {
    const where = {};
    if (req.query.code) where.code = String(req.query.code);
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

export const listClassMaterials = async (req, res) => {
  try {
    const where = {};
    if (req.query.classId) where.classId = String(req.query.classId);
    const materials = await prisma.classMaterial.findMany({ where });
    res.json(materials);
  } catch (error) {
    console.error('listClassMaterials', error);
    res.status(500).json({ message: 'Failed to load materials.' });
  }
};
