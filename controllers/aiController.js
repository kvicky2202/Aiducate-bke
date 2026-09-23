import prisma from '../config/db.js';
import { parseJson } from '../utils/json.js';
import { loadMaterialSourceText } from '../utils/pdfText.js';
import { assertStudentEnrolled } from '../utils/enrollment.js';
import { chatCompletion, isAiEnabled } from '../services/aiService.js';
import { generateAssignmentQuestions as buildAssignmentQuestions } from '../services/quizGeneratorService.js';

const EDUCATOR_SYSTEM = `You are an AI teaching assistant for AIDucate. You help teachers understand class performance and suggest practical next steps.
Be concise, data-driven, and supportive. Use ONLY the class data in the context — do not invent student names, scores, or assignments.
When students have not submitted, say so clearly. Suggest actionable teaching moves (review sessions, grouping, assignment tweaks).
Keep replies under 150 words unless the teacher asks for detail. You may use **bold** and short bullet lists.`;

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

async function loadClassInsightsData(classId) {
  const classData = await prisma.classroom.findUnique({ where: { id: classId } });
  if (!classData) return null;

  const assignments = await prisma.assignment.findMany({ where: { classId } });
  const assignmentIds = assignments.map((a) => a.id);

  const results =
    assignmentIds.length > 0
      ? await prisma.assignmentResult.findMany({
          where: { assignmentId: { in: assignmentIds } },
        })
      : [];

  const allStudents = await prisma.user.findMany({ where: { role: 'student' } });
  const students = allStudents.filter((u) =>
    parseJson(u.enrolledClassIds, []).includes(classId)
  );

  return { classData, assignments, results, students };
}

function formatEducatorContext({ classData, assignments, results, students }) {
  const enrolledCount = students.length;
  const studentNames = students.map((s) => s.name).join(', ');

  const assignmentLines = assignments.map((a) => {
    const subs = results.filter((r) => r.assignmentId === a.id);
    const avg =
      subs.length > 0
        ? Math.round(
            subs.reduce((sum, r) => sum + (r.score / r.totalPoints) * 100, 0) / subs.length
          )
        : null;
    return `- ${a.title}: ${subs.length}/${enrolledCount} submitted, class avg ${avg ?? '—'}%, due ${a.dueDate}, status ${a.status}`;
  });

  const studentLines = students.map((s) => {
    const subs = results.filter((r) => r.studentId === s.id);
    if (!subs.length) return `- ${s.name}: no submissions yet`;
    const avg = Math.round(
      subs.reduce((sum, r) => sum + (r.score / r.totalPoints) * 100, 0) / subs.length
    );
    const detail = subs
      .map((r) => {
        const a = assignments.find((x) => x.id === r.assignmentId);
        const pct = Math.round((r.score / r.totalPoints) * 100);
        return `${a?.title ?? 'assignment'} ${pct}%`;
      })
      .join('; ');
    return `- ${s.name}: avg ${avg}% (${detail})`;
  });

  const allPercents = results.map((r) => (r.score / r.totalPoints) * 100);
  const classAvg =
    allPercents.length > 0
      ? Math.round(allPercents.reduce((a, b) => a + b, 0) / allPercents.length)
      : null;

  const notSubmitted = students.filter(
    (s) => !results.some((r) => r.studentId === s.id)
  );
  const missingNames = notSubmitted.map((s) => s.name).join(', ');

  return [
    `Class: ${classData.name}`,
    `Subject: ${classData.subject ?? 'N/A'}`,
    `Section: ${classData.section ?? 'N/A'}`,
    `Teacher: ${classData.teacherName}`,
    `Enrolled students (${enrolledCount}): ${studentNames || 'none'}`,
    classAvg !== null
      ? `Overall average from submissions: ${classAvg}% (${results.length} total submissions)`
      : 'No student submissions recorded yet',
    missingNames ? `Students with zero submissions: ${missingNames}` : '',
    'Assignments:',
    assignmentLines.length ? assignmentLines.join('\n') : '- None',
    'Per-student:',
    studentLines.length ? studentLines.join('\n') : '- No submission data',
  ]
    .filter(Boolean)
    .join('\n');
}

export const askEducatorAssistant = async (req, res) => {
  try {
    const { classId, message, history } = req.body;
    const trimmed = String(message || '').trim();
    if (!trimmed) return res.status(400).json({ message: 'message is required.' });

    const insights = await loadClassInsightsData(classId);
    if (!insights) return res.status(404).json({ message: 'Class not found.' });

    const { classData, assignments, results, students } = insights;
    const contextBlock = formatEducatorContext(insights);

    const activeCount = assignments.filter((a) => a.status !== 'completed').length;
    const allPercents = results.map((r) => (r.score / r.totalPoints) * 100);
    const avgScore =
      allPercents.length > 0
        ? Math.round(allPercents.reduce((a, b) => a + b, 0) / allPercents.length)
        : null;

    const prior = Array.isArray(history) ? history.slice(-6) : [];
    const messages = prior
      .filter((m) => m?.text && (m.role === 'user' || m.role === 'ai' || m.sender === 'user' || m.sender === 'ai'))
      .map((m) => ({
        role: m.role === 'user' || m.sender === 'user' ? 'user' : 'assistant',
        content: String(m.text).slice(0, 1500),
      }));
    messages.push({ role: 'user', content: trimmed });

    let text;
    let usedAi = false;
    let aiError;

    if (isAiEnabled()) {
      const result = await chatCompletion({
        system: `${EDUCATOR_SYSTEM}\n\n--- Class data (live) ---\n${contextBlock}`,
        messages,
        maxTokens: 550,
      });
      if (result.text) {
        text = result.text;
        usedAi = true;
      } else {
        aiError = result.error;
      }
    }

    if (!text) {
      text = isAiEnabled()
        ? `I couldn't reach the teaching assistant just now${aiError ? ` (${aiError})` : ''}. Try again in a moment.`
        : `Looking at ${classData.name}: ${
            avgScore !== null ? `submission average is ${avgScore}%, ` : 'no submissions yet, '
          }${students.length} enrolled, ${activeCount} active assignment${activeCount === 1 ? '' : 's'}. Regarding "${trimmed}" — enable OPENROUTER_API_KEY for full AI analysis.`;
    }

    res.json({
      sender: 'ai',
      text,
      usedAi,
    });
  } catch (error) {
    console.error('askEducatorAssistant', error);
    res.status(500).json({ message: 'Failed to get assistant reply.' });
  }
};

/**
 * Preview/generate MCQ questions for teacher assignment builder.
 * Sources: class material (PDF + summary), subject, or custom topic.
 */
export const generateAssignmentQuestions = async (req, res) => {
  try {
    const { materialId, classId, subject, topic, questionCount } = req.body || {};

    let sourceText = '';
    let materialTitle = '';
    let resolvedSubject = subject?.trim() || '';
    let resolvedTopic = topic?.trim() || '';

    if (materialId) {
      const material = await prisma.classMaterial.findUnique({ where: { id: materialId } });
      if (!material) return res.status(404).json({ message: 'Material not found.' });

      if (classId && material.classId !== classId) {
        return res.status(400).json({ message: 'Material does not belong to this class.' });
      }

      materialTitle = material.title;
      sourceText = await loadMaterialSourceText(material);

      if (!resolvedSubject) {
        const cls = await prisma.classroom.findUnique({ where: { id: material.classId } });
        resolvedSubject = cls?.subject || '';
      }
    }

    if (classId && !resolvedSubject) {
      const cls = await prisma.classroom.findUnique({ where: { id: classId } });
      resolvedSubject = cls?.subject || '';
    }

    const result = await buildAssignmentQuestions({
      sourceText,
      subject: resolvedSubject,
      topic: resolvedTopic,
      materialTitle,
      questionCount,
    });

    res.json({
      questions: result.questions,
      usedAi: result.usedAi,
      source: result.source,
      aiEnabled: isAiEnabled(),
      materialTitle: materialTitle || undefined,
      hasSourceText: Boolean(sourceText),
    });
  } catch (error) {
    console.error('generateAssignmentQuestions', error);
    res.status(500).json({ message: 'Failed to generate questions.' });
  }
};

/**
 * Student practice quiz from teacher-uploaded class materials (not graded / not saved as assignment).
 */
export const generatePracticeQuiz = async (req, res) => {
  try {
    const { classId, studentId, materialId, topic, questionCount } = req.body || {};

    if (!classId || !studentId) {
      return res.status(400).json({ message: 'classId and studentId are required.' });
    }

    const enrollment = await assertStudentEnrolled(studentId, classId);
    if (!enrollment.ok) {
      return res.status(enrollment.status).json({ message: enrollment.message });
    }

    const classroom = await prisma.classroom.findUnique({ where: { id: classId } });
    if (!classroom) return res.status(404).json({ message: 'Class not found.' });

    let sourceText = '';
    let materialTitle = '';
    const resolvedSubject = classroom.subject || '';
    const resolvedTopic = topic?.trim() || '';

    if (materialId) {
      const material = await prisma.classMaterial.findUnique({ where: { id: materialId } });
      if (!material) return res.status(404).json({ message: 'Material not found.' });
      if (material.classId !== classId) {
        return res.status(400).json({ message: 'Material does not belong to this class.' });
      }
      materialTitle = material.title;
      sourceText = await loadMaterialSourceText(material);
    }

    const result = await buildAssignmentQuestions({
      sourceText,
      subject: resolvedSubject,
      topic: resolvedTopic,
      materialTitle,
      questionCount,
    });

    let title = `Practice — ${resolvedSubject}`;
    if (materialTitle) {
      title = resolvedTopic
        ? `Practice: ${materialTitle} (${resolvedTopic})`
        : `Practice: ${materialTitle}`;
    } else if (resolvedTopic) {
      title = `Practice: ${resolvedTopic}`;
    }

    res.json({
      title,
      questions: result.questions,
      usedAi: result.usedAi,
      source: result.source,
      classId,
      materialId: materialId || undefined,
      materialTitle: materialTitle || undefined,
      topic: resolvedTopic || undefined,
    });
  } catch (error) {
    console.error('generatePracticeQuiz', error);
    res.status(500).json({ message: 'Failed to generate practice quiz.' });
  }
};
