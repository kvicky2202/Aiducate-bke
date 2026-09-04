import { chatCompletion, isAiEnabled } from './aiService.js';

const MAX_SOURCE_CHARS = 14000;
const OPTION_LETTERS = ['A', 'B', 'C', 'D'];

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

function resolveCorrectIndex(raw) {
  if (typeof raw.correctAnswer === 'number' && Number.isFinite(raw.correctAnswer)) {
    return raw.correctAnswer;
  }
  if (typeof raw.correctIndex === 'number' && Number.isFinite(raw.correctIndex)) {
    return raw.correctIndex;
  }
  if (raw.correctOptionId) {
    const idx = OPTION_LETTERS.indexOf(String(raw.correctOptionId).toUpperCase());
    if (idx >= 0) return idx;
  }
  return 0;
}

function normalizeOptions(rawOptions) {
  if (!Array.isArray(rawOptions)) return [];

  const labels = rawOptions.map((opt) => {
    if (typeof opt === 'string') return opt.trim();
    if (opt && typeof opt === 'object') {
      return String(opt.label ?? opt.text ?? opt.value ?? '').trim();
    }
    return '';
  });

  return labels.filter(Boolean).slice(0, 4);
}

/**
 * Normalize arbitrary question payloads to assignment quiz shape used by students.
 */
export function normalizeAssignmentQuestions(rawQuestions, startId = 1) {
  if (!Array.isArray(rawQuestions)) return [];

  const normalized = [];
  let nextId = startId;

  for (const raw of rawQuestions) {
    const prompt = String(raw?.prompt ?? raw?.question ?? raw?.title ?? '').trim();
    const options = normalizeOptions(raw?.options);
    if (!prompt || options.length < 2) continue;

    let correctAnswer = resolveCorrectIndex(raw);
    if (correctAnswer < 0 || correctAnswer >= options.length) correctAnswer = 0;

    normalized.push({
      id: nextId,
      prompt,
      options,
      correctAnswer,
    });
    nextId += 1;
  }

  return normalized;
}

export function generateMockAssignmentQuestions(subject, count = 5) {
  const bank = MOCK_QUESTION_BANK[subject] || MOCK_QUESTION_BANK.English;
  const picked = shuffle(bank).slice(0, Math.min(count, bank.length));
  return normalizeAssignmentQuestions(
    picked.map((q) => ({
      prompt: q.prompt,
      options: q.options,
      correctIndex: q.correctIndex,
    }))
  );
}

function parseJsonFromAi(text) {
  if (!text) return null;

  const fenced = text.match(/```(?:json)?\s*([\s\S]*?)```/i);
  const candidate = fenced ? fenced[1].trim() : text.trim();

  try {
    return JSON.parse(candidate);
  } catch {
    const start = candidate.indexOf('{');
    const end = candidate.lastIndexOf('}');
    if (start >= 0 && end > start) {
      try {
        return JSON.parse(candidate.slice(start, end + 1));
      } catch {
        return null;
      }
    }
    return null;
  }
}

const QUESTION_SYSTEM = `You create multiple-choice quiz questions for K-12 teachers on AIDucate.
Return ONLY valid JSON with this exact shape:
{"questions":[{"prompt":"question text","options":["A","B","C","D"],"correctAnswer":0}]}
Rules:
- correctAnswer is a 0-based index into options
- Each question needs 4 options when possible (minimum 2)
- Questions must match the provided source material when source text is given
- Use clear, age-appropriate language
- No markdown, no commentary outside JSON`;

/**
 * Generate assignment questions with AI from material text and/or subject/topic.
 */
export async function generateAssignmentQuestionsWithAi({
  sourceText,
  subject,
  topic,
  materialTitle,
  questionCount = 5,
}) {
  const count = Math.min(Math.max(Number(questionCount) || 5, 1), 10);

  const contextParts = [];
  if (materialTitle) contextParts.push(`Material: ${materialTitle}`);
  if (subject) contextParts.push(`Subject: ${subject}`);
  if (topic) contextParts.push(`Focus topic: ${topic}`);
  if (sourceText) contextParts.push(`Source content:\n${sourceText.slice(0, MAX_SOURCE_CHARS)}`);

  const userPrompt = [
    `Create ${count} multiple-choice questions.`,
    contextParts.length ? contextParts.join('\n\n') : 'Use general knowledge for the subject.',
    'Return JSON only.',
  ].join('\n\n');

  const result = await chatCompletion({
    system: QUESTION_SYSTEM,
    messages: [{ role: 'user', content: userPrompt }],
    maxTokens: 1200,
  });

  if (!result.text) return null;

  const parsed = parseJsonFromAi(result.text);
  const rawList = Array.isArray(parsed) ? parsed : parsed?.questions;
  if (!Array.isArray(rawList)) return null;

  const normalized = normalizeAssignmentQuestions(rawList);
  return normalized.length > 0 ? normalized.slice(0, count) : null;
}

export async function generateAssignmentQuestions({
  sourceText,
  subject,
  topic,
  materialTitle,
  questionCount = 5,
}) {
  const count = Math.min(Math.max(Number(questionCount) || 5, 1), 10);

  if (isAiEnabled()) {
    try {
      const aiQuestions = await generateAssignmentQuestionsWithAi({
        sourceText,
        subject,
        topic,
        materialTitle,
        questionCount: count,
      });
      if (aiQuestions?.length) {
        return { questions: aiQuestions, usedAi: true, source: 'ai' };
      }
    } catch (error) {
      console.error('generateAssignmentQuestionsWithAi failed:', error.message);
    }
  }

  const mock = generateMockAssignmentQuestions(subject || 'English', count);
  return { questions: mock, usedAi: false, source: 'template' };
}
