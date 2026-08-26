import prisma from '../config/db.js';
import { shapeQuizQuestionSet } from '../utils/serializers.js';
import { getGeneratedQuiz } from './aiController.js';

export const listQuizzes = async (req, res) => {
  try {
    const where = {};
    if (req.query.subject) where.subject = String(req.query.subject);
    const quizzes = await prisma.quiz.findMany({ where });
    res.json(quizzes);
  } catch (error) {
    console.error('listQuizzes', error);
    res.status(500).json({ message: 'Failed to load quizzes.' });
  }
};

export const getQuizById = async (req, res) => {
  try {
    const generated = getGeneratedQuiz(req.params.id);
    if (generated) return res.json(generated.quiz);

    const quiz = await prisma.quiz.findUnique({ where: { id: req.params.id } });
    if (!quiz) return res.status(404).json({ message: 'Quiz not found.' });
    res.json(quiz);
  } catch (error) {
    console.error('getQuizById', error);
    res.status(500).json({ message: 'Failed to load quiz.' });
  }
};

export const listQuizQuestions = async (req, res) => {
  try {
    const quizId = req.query.quizId ? String(req.query.quizId) : null;
    if (quizId) {
      const generated = getGeneratedQuiz(quizId);
      if (generated) {
        return res.json([
          { id: `qq-${quizId}`, quizId, questions: generated.questions },
        ]);
      }
    }
    const where = {};
    if (quizId) where.quizId = quizId;
    const sets = await prisma.quizQuestionSet.findMany({ where });
    res.json(sets.map(shapeQuizQuestionSet));
  } catch (error) {
    console.error('listQuizQuestions', error);
    res.status(500).json({ message: 'Failed to load quiz questions.' });
  }
};

export const listStories = async (req, res) => {
  try {
    const stories = await prisma.story.findMany();
    res.json(stories);
  } catch (error) {
    console.error('listStories', error);
    res.status(500).json({ message: 'Failed to load stories.' });
  }
};

export const getDailyObjective = async (_req, res) => {
  try {
    const row = await prisma.dailyObjective.findUnique({ where: { id: 'singleton' } });
    if (!row) return res.status(404).json({ message: 'Daily objective not found.' });
    const { id, ...rest } = row;
    res.json(rest);
  } catch (error) {
    console.error('getDailyObjective', error);
    res.status(500).json({ message: 'Failed to load daily objective.' });
  }
};

export const patchDailyObjective = async (req, res) => {
  try {
    const allowed = ['completedQuizzes', 'targetQuizzes', 'bonusUnlocked'];
    const data = {};
    for (const key of allowed) {
      if (req.body[key] !== undefined) data[key] = req.body[key];
    }
    const row = await prisma.dailyObjective.update({
      where: { id: 'singleton' },
      data,
    });
    const { id, ...rest } = row;
    res.json(rest);
  } catch (error) {
    console.error('patchDailyObjective', error);
    res.status(500).json({ message: 'Failed to update daily objective.' });
  }
};

export const recordQuizCompletion = async (req, res) => {
  try {
    const { userId, xpEarned } = req.body;
    const user = await prisma.user.findUnique({ where: { id: userId } });
    if (!user) return res.status(404).json({ message: 'User not found.' });

    const [updatedUser, objective] = await prisma.$transaction([
      prisma.user.update({
        where: { id: userId },
        data: { exp: (user.exp || 0) + Number(xpEarned || 0) },
      }),
      prisma.dailyObjective.update({
        where: { id: 'singleton' },
        data: { completedQuizzes: { increment: 1 } },
      }),
    ]);

    res.json({
      exp: updatedUser.exp,
      completedQuizzes: objective.completedQuizzes,
    });
  } catch (error) {
    console.error('recordQuizCompletion', error);
    res.status(500).json({ message: 'Failed to record quiz completion.' });
  }
};
