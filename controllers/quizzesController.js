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

const DEFAULT_TARGET_QUIZZES = 2;

async function getOrCreateDailyObjective(userId) {
  const existing = await prisma.dailyObjective.findUnique({ where: { id: userId } });
  if (existing) return existing;
  return prisma.dailyObjective.create({
    data: {
      id: userId,
      completedQuizzes: 0,
      targetQuizzes: DEFAULT_TARGET_QUIZZES,
      bonusUnlocked: false,
    },
  });
}

function shapeDailyObjective(row) {
  if (!row) return null;
  return {
    userId: row.id,
    completedQuizzes: row.completedQuizzes,
    targetQuizzes: row.targetQuizzes,
    bonusUnlocked: row.bonusUnlocked,
  };
}

export const getDailyObjective = async (req, res) => {
  try {
    const userId = req.query.userId ? String(req.query.userId) : null;
    if (!userId) {
      return res.status(400).json({ message: 'userId query param is required.' });
    }

    const user = await prisma.user.findUnique({ where: { id: userId } });
    if (!user) return res.status(404).json({ message: 'User not found.' });

    const row = await getOrCreateDailyObjective(userId);
    res.json(shapeDailyObjective(row));
  } catch (error) {
    console.error('getDailyObjective', error);
    res.status(500).json({ message: 'Failed to load daily objective.' });
  }
};

export const patchDailyObjective = async (req, res) => {
  try {
    const userId = req.query.userId
      ? String(req.query.userId)
      : req.body?.userId
        ? String(req.body.userId)
        : null;

    if (!userId) {
      return res.status(400).json({ message: 'userId is required.' });
    }

    await getOrCreateDailyObjective(userId);

    const allowed = ['completedQuizzes', 'targetQuizzes', 'bonusUnlocked'];
    const data = {};
    for (const key of allowed) {
      if (req.body[key] !== undefined) data[key] = req.body[key];
    }

    const row = await prisma.dailyObjective.update({
      where: { id: userId },
      data,
    });
    res.json(shapeDailyObjective(row));
  } catch (error) {
    console.error('patchDailyObjective', error);
    res.status(500).json({ message: 'Failed to update daily objective.' });
  }
};

export const recordQuizCompletion = async (req, res) => {
  try {
    const { userId, xpEarned } = req.body || {};
    if (!userId) {
      return res.status(400).json({ message: 'userId is required.' });
    }

    const user = await prisma.user.findUnique({ where: { id: userId } });
    if (!user) return res.status(404).json({ message: 'User not found.' });

    await getOrCreateDailyObjective(userId);

    const [updatedUser, objective] = await prisma.$transaction([
      prisma.user.update({
        where: { id: userId },
        data: { exp: (user.exp || 0) + Number(xpEarned || 0) },
      }),
      prisma.dailyObjective.update({
        where: { id: userId },
        data: { completedQuizzes: { increment: 1 } },
      }),
    ]);

    const bonusUnlocked =
      objective.completedQuizzes >= objective.targetQuizzes
        ? true
        : objective.bonusUnlocked;

    let finalObjective = objective;
    if (bonusUnlocked && !objective.bonusUnlocked) {
      finalObjective = await prisma.dailyObjective.update({
        where: { id: userId },
        data: { bonusUnlocked: true },
      });
    }

    res.json({
      exp: updatedUser.exp,
      ...shapeDailyObjective(finalObjective),
    });
  } catch (error) {
    console.error('recordQuizCompletion', error);
    res.status(500).json({ message: 'Failed to record quiz completion.' });
  }
};
