import prisma from '../config/db.js';
import { parseJson } from '../utils/json.js';
import { chatCompletion, isAiEnabled, getAiProviderInfo } from '../services/aiService.js';

const BAOBAB_SYSTEM = `You are Baobab, a warm coding mentor for AIDucate Code Lab (students learning Python).
Tone: encouraging, clear, age-appropriate. You may greet with "Muli bwanji!" occasionally.
Rules:
- Guide with questions and small steps; do NOT paste full solutions or complete assignment code.
- Explain concepts simply. Use markdown **bold** and \`code\` for short snippets only (1-2 lines max).
- If the student shares code, help debug by pointing to likely issues — don't rewrite their whole program.
- Stay on topic: Python, the current lesson, and learning to code.
- Keep replies under 120 words unless they ask for a detailed explanation.`;

function buildContextBlock(context = {}) {
  const lines = [];
  if (context.moduleTitle) lines.push(`Module: ${context.moduleTitle}`);
  if (context.lessonTitle) lines.push(`Current lesson: ${context.lessonTitle}`);
  if (context.source) lines.push(`Chat context: ${context.source}`);
  if (context.codeSnippet?.trim()) {
    lines.push(`Student code (partial):\n${String(context.codeSnippet).slice(0, 800)}`);
  }
  if (context.lessonId && context.moduleId) {
    lines.push(`Lesson id: ${context.moduleId}/${context.lessonId}`);
  }
  return lines.length ? lines.join('\n') : 'General Code Lab hub — no specific lesson open.';
}

async function getLessonObjectives(moduleId, lessonId) {
  if (!moduleId || !lessonId) return '';
  const row = await prisma.codeModuleCurriculum.findUnique({ where: { moduleId } });
  if (!row) return '';
  const mod = parseJson(row.curriculum, {});
  for (const ch of mod.chapters || []) {
    for (const item of ch.lessons || []) {
      if (item.id === lessonId && item.tasks?.length) {
        return item.tasks
          .map((t, i) => `${i + 1}. ${t.text}${t.codeSnippet ? ` (${t.codeSnippet})` : ''}`)
          .join('\n');
      }
    }
  }
  return '';
}

function mockMentorReply(message, context) {
  const lesson = context?.lessonTitle ?? 'this lesson';
  const lower = String(message).toLowerCase();
  if (context?.source === 'hint') {
    return `Here's a nudge for **${lesson}**: work through the objectives one at a time. Write one small line, run it, then add the next. (Demo mode — add OPENROUTER_API_KEY or OPENAI_API_KEY to the backend .env.)`;
  }
  if (lower.includes('variable') || lower.includes('assign')) {
    return `In Python, \`name = value\` assigns a variable. Try one variable first, then \`print()\` it. (Demo mode — set OPENROUTER_API_KEY for free models via OpenRouter.)`;
  }
  return `Thanks for your question about "${message}". Focus on the objectives checklist and take small steps. (Demo mode — add OPENROUTER_API_KEY to enable AI mentoring.)`;
}

export const askCodeLabMentor = async (req, res) => {
  try {
    const { message, context, history } = req.body || {};
    const trimmed = String(message || '').trim();

    if (!trimmed) {
      return res.status(400).json({ message: 'message is required.' });
    }
    if (trimmed.length > 2000) {
      return res.status(400).json({ message: 'message is too long.' });
    }

    const ctx = context || {};
    const objectives = await getLessonObjectives(ctx.moduleId, ctx.lessonId);
    const contextBlock = buildContextBlock(ctx);
    const objectivesBlock = objectives
      ? `\nLesson objectives (guide toward these, don't solve outright):\n${objectives}`
      : '';

    const system = `${BAOBAB_SYSTEM}\n\n---\n${contextBlock}${objectivesBlock}`;

    const prior = Array.isArray(history) ? history.slice(-6) : [];
    const messages = prior
      .filter((m) => m?.text && (m.role === 'user' || m.role === 'mentor'))
      .map((m) => ({
        role: m.role === 'mentor' ? 'assistant' : 'user',
        content: String(m.text).slice(0, 1500),
      }));
    messages.push({ role: 'user', content: trimmed });

    let text;
    let usedAi = false;
    let aiError;

    if (isAiEnabled()) {
      const result = await chatCompletion({ system, messages });
      if (result.text) {
        text = result.text;
        usedAi = true;
      } else {
        aiError = result.error;
      }
    }

    if (!text) {
      text = isAiEnabled()
        ? `I couldn't reach the mentor model just now${aiError ? ` (${aiError})` : ''}. Try asking again in a moment.`
        : mockMentorReply(trimmed, ctx);
    }

    res.json({
      sender: 'ai',
      text,
      usedAi,
    });
  } catch (error) {
    console.error('askCodeLabMentor', error);
    res.status(500).json({
      message: 'Failed to get mentor reply.',
      detail: process.env.NODE_ENV === 'development' ? error.message : undefined,
    });
  }
};

export const getAiStatus = (_req, res) => {
  const info = getAiProviderInfo();
  res.json(info);
};
