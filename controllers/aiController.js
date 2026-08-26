import prisma from '../config/db.js';

const MOCK_QUESTION_BANK = {
  English: [
    { prompt: 'Which word is a verb?', options: ['Happy', 'Run', 'Blue', 'Table'], correctIndex: 1 },
    { prompt: "What is the plural of 'child'?", options: ['Childs', 'Childes', 'Children', 'Childrens'], correctIndex: 2 },
    { prompt: "Which is a synonym for 'big'?", options: ['Tiny', 'Large', 'Fast', 'Quiet'], correctIndex: 1 },
    { prompt: 'Choose the correctly spelled word.', options: ['Recieve', 'Receive', 'Receeve', 'Receve'], correctIndex: 1 },
    { prompt: 'Which word is an adverb?', options: ['Quickly', 'Quick', 'Quickness', 'Quicken'], correctIndex: 0 },
  ],
  Math: [
    { prompt: 'What is 7 x 8?', options: ['54', '56', '64', '48'], correctIndex: 1 },
    { prompt: 'What is 100 divided by 4?', options: ['20', '25', '30', '40'], correctIndex: 1 },
    { prompt: 'Solve: 15 - 9', options: ['4', '5', '6', '7'], correctIndex: 2 },
    { prompt: 'What is the next prime number after 7?', options: ['8', '9', '11', '13'], correctIndex: 2 },
    { prompt: 'What is 1/2 + 1/4?', options: ['1/6', '2/6', '3/4', '1/4'], correctIndex: 2 },
  ],
  'General Science': [
    { prompt: 'What gas do humans exhale?', options: ['Oxygen', 'Carbon Dioxide', 'Nitrogen', 'Hydrogen'], correctIndex: 1 },
    { prompt: 'What is the closest planet to the sun?', options: ['Venus', 'Earth', 'Mercury', 'Mars'], correctIndex: 2 },
    { prompt: 'What part of the plant absorbs water?', options: ['Leaf', 'Stem', 'Root', 'Flower'], correctIndex: 2 },
    { prompt: 'What is H2O commonly known as?', options: ['Salt', 'Water', 'Oxygen', 'Sugar'], correctIndex: 1 },
    { prompt: 'How many legs does an insect have?', options: ['4', '6', '8', '10'], correctIndex: 1 },
  ],
};

function shuffle(arr) {
  const copy = [...arr];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

const generatedQuizzes = new Map();

export const generateQuizForSubject = async (req, res) => {
  try {
    const subject = req.body.subject || req.query.subject || 'English';
    const bank = MOCK_QUESTION_BANK[subject] || MOCK_QUESTION_BANK.English;
    const picked = shuffle(bank).slice(0, Math.min(4, bank.length));
    const optionLetters = ['A', 'B', 'C', 'D'];

    const id = `ai-quiz-${String(subject).replace(/\s+/g, '-')}-${Date.now()}`;
    const questions = picked.map((q, i) => ({
      id: i + 1,
      prompt: q.prompt,
      options: q.options.map((label, idx) => ({ id: optionLetters[idx], label })),
      correctOptionId: optionLetters[q.correctIndex],
      xpReward: 15,
    }));

    const quiz = {
      id,
      subject,
      title: `${subject} Practice Quiz`,
      questionCount: questions.length,
      xpReward: questions.reduce((sum, q) => sum + q.xpReward, 0),
    };

    generatedQuizzes.set(id, { quiz, questions });
    res.json(quiz);
  } catch (error) {
    console.error('generateQuizForSubject', error);
    res.status(500).json({ message: 'Failed to generate quiz.' });
  }
};

export const getGeneratedQuiz = (id) => generatedQuizzes.get(id) || null;

export const askEducatorAssistant = async (req, res) => {
  try {
    const { classId, message } = req.body;
    const [classData, assignments] = await Promise.all([
      prisma.classroom.findUnique({ where: { id: classId } }),
      prisma.assignment.findMany({ where: { classId } }),
    ]);

    if (!classData) return res.status(404).json({ message: 'Class not found.' });

    const scored = assignments.filter((a) => typeof a.score === 'number' && a.totalPoints);
    const avgScore =
      scored.length > 0
        ? Math.round(
            scored.reduce((sum, a) => sum + (a.score / a.totalPoints) * 100, 0) / scored.length
          )
        : null;
    const activeCount = assignments.filter((a) => a.status !== 'completed').length;

    res.json({
      sender: 'ai',
      text: `Looking at ${classData.name}: ${
        avgScore !== null ? `class average is ${avgScore}%, ` : 'no graded assignments yet, '
      }${activeCount} assignment${activeCount === 1 ? '' : 's'} still active. Regarding "${message}" — once connected to a real model, I'll give tailored guidance based on this class's actual performance data.`,
    });
  } catch (error) {
    console.error('askEducatorAssistant', error);
    res.status(500).json({ message: 'Failed to get assistant reply.' });
  }
};
