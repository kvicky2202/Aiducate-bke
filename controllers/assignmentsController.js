import prisma from '../config/db.js';
import { shapeAssignmentQuiz } from '../utils/serializers.js';

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
