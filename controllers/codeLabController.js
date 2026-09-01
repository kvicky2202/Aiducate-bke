import { spawn } from 'child_process';
import prisma from '../config/db.js';
import { parseJson, toJson } from '../utils/json.js';

const PYTHON_MODULE_ID = 'python-fundamentals';

const DEFAULT_GROWTH_DAYS = [
  { label: 'Mon', height: '0%', current: false },
  { label: 'Tue', height: '0%', current: false },
  { label: 'Wed', height: '0%', current: false },
  { label: 'Thu', height: '0%', current: false },
  { label: 'Fri', height: '0%', current: false },
];

function progressKey(moduleId, itemId) {
  return `${moduleId}:${itemId}`;
}

function countCompleted(itemProgress, moduleId) {
  return Object.entries(itemProgress).filter(
    ([key, status]) => key.startsWith(`${moduleId}:`) && status === 'completed'
  ).length;
}

async function getModuleLessonTotal(moduleId) {
  const curriculumRow = await prisma.codeModuleCurriculum.findUnique({
    where: { moduleId },
  });
  if (curriculumRow) {
    const mod = parseJson(curriculumRow.curriculum, {});
    if (mod.chapters) {
      return mod.chapters.reduce((sum, ch) => sum + (ch.lessons?.length || 0), 0);
    }
  }
  const mod = await prisma.codeModule.findUnique({ where: { id: moduleId } });
  return mod?.lessons ?? 1;
}

async function ensureUserProgress(userId) {
  let row = await prisma.userCodeLabProgress.findUnique({ where: { userId } });
  if (row) return row;

  const user = await prisma.user.findUnique({ where: { id: userId } });
  if (!user) return null;

  return prisma.userCodeLabProgress.create({
    data: {
      userId,
      activeModuleId: '',
      itemProgress: '{}',
      weeklyGoal: '0h / 5h',
      growthDays: toJson(DEFAULT_GROWTH_DAYS),
    },
  });
}

async function buildHubResponse(row) {
  const itemProgress = parseJson(row.itemProgress, {});
  const activeId = row.activeModuleId?.trim() || null;
  const module = activeId
    ? await prisma.codeModule.findUnique({ where: { id: activeId } })
    : null;
  const total = activeId ? await getModuleLessonTotal(activeId) : 0;
  const completed = activeId ? countCompleted(itemProgress, activeId) : 0;
  const completionPercentage = total > 0 ? Math.round((completed / total) * 100) : 0;

  return {
    currentPath: module?.title ?? null,
    description: module?.description ?? '',
    completionPercentage,
    status: completionPercentage >= 100 ? 'Completed' : activeId ? 'Active' : 'New',
    activeModuleId: activeId,
    itemProgress,
    completedLessons: completed,
    totalLessons: total,
  };
}

export const getCodeLabProgress = async (req, res) => {
  try {
    const userId = String(req.query.userId || '');
    if (!userId) {
      return res.status(400).json({ message: 'userId query parameter is required.' });
    }

    const row = await ensureUserProgress(userId);
    if (!row) return res.status(404).json({ message: 'User not found.' });

    res.json(await buildHubResponse(row));
  } catch (error) {
    console.error('getCodeLabProgress', error);
    res.status(500).json({ message: 'Failed to load code lab progress.' });
  }
};

export const patchCodeLabProgress = async (req, res) => {
  try {
    const { userId, moduleId, itemId, status, activeModuleId } = req.body || {};
    if (!userId) {
      return res.status(400).json({ message: 'userId is required.' });
    }

    const row = await ensureUserProgress(userId);
    if (!row) return res.status(404).json({ message: 'User not found.' });

    const itemProgress = parseJson(row.itemProgress, {});
    if (moduleId && itemId && status) {
      itemProgress[progressKey(moduleId, itemId)] = status;
    }

    const updated = await prisma.userCodeLabProgress.update({
      where: { userId },
      data: {
        itemProgress: toJson(itemProgress),
        activeModuleId:
          activeModuleId ||
          (moduleId && (itemId || Object.keys(itemProgress).length > 0) ? moduleId : row.activeModuleId),
        growthDays: toJson(bumpGrowthForToday(parseJson(row.growthDays, DEFAULT_GROWTH_DAYS))),
      },
    });

    res.json(await buildHubResponse(updated));
  } catch (error) {
    console.error('patchCodeLabProgress', error);
    res.status(500).json({ message: 'Failed to update code lab progress.' });
  }
};

function bumpGrowthForToday(days) {
  const labels = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const today = labels[new Date().getDay()];
  return days.map((d) => {
    if (d.label !== today) return { ...d, current: false };
    const currentHeight = parseInt(String(d.height).replace('%', ''), 10) || 0;
    const next = Math.min(100, currentHeight + 15);
    return { label: d.label, height: `${next}%`, current: true };
  });
}

export const getModuleProgress = async (req, res) => {
  try {
    const userId = String(req.query.userId || '');
    const moduleId = String(req.query.moduleId || req.params.moduleId || '');
    if (!userId || !moduleId) {
      return res.status(400).json({ message: 'userId and moduleId are required.' });
    }

    const row = await ensureUserProgress(userId);
    if (!row) return res.status(404).json({ message: 'User not found.' });

    const itemProgress = parseJson(row.itemProgress, {});
    const total = await getModuleLessonTotal(moduleId);
    const completed = countCompleted(itemProgress, moduleId);
    const percent = total > 0 ? Math.round((completed / total) * 100) : 0;

    res.json({ moduleId, completed, total, percent, itemProgress });
  } catch (error) {
    console.error('getModuleProgress', error);
    res.status(500).json({ message: 'Failed to load module progress.' });
  }
};

export const getGrowthJourney = async (req, res) => {
  try {
    const userId = String(req.query.userId || '');
    if (!userId) {
      return res.status(400).json({ message: 'userId query parameter is required.' });
    }

    const row = await ensureUserProgress(userId);
    if (!row) return res.status(404).json({ message: 'User not found.' });

    res.json({
      weeklyGoal: row.weeklyGoal,
      days: parseJson(row.growthDays, DEFAULT_GROWTH_DAYS),
    });
  } catch (error) {
    console.error('getGrowthJourney', error);
    res.status(500).json({ message: 'Failed to load growth journey.' });
  }
};

export const getCodeModules = async (_req, res) => {
  try {
    const modules = await prisma.codeModule.findMany();
    const withContent = await prisma.codeModuleCurriculum.findMany({
      select: { moduleId: true, sourceUrl: true, sourceLabel: true },
    });
    const contentMap = Object.fromEntries(withContent.map((r) => [r.moduleId, r]));

    res.json(
      modules.map((m) => ({
        ...m,
        hasOfficialContent: !!contentMap[m.id],
        sourceUrl: contentMap[m.id]?.sourceUrl,
        sourceLabel: contentMap[m.id]?.sourceLabel,
      }))
    );
  } catch (error) {
    console.error('getCodeModules', error);
    res.status(500).json({ message: 'Failed to load code modules.' });
  }
};

export const getCodeModuleById = async (req, res) => {
  try {
    const moduleId = req.params.moduleId;
    const catalog = await prisma.codeModule.findUnique({ where: { id: moduleId } });
    if (!catalog) return res.status(404).json({ message: 'Module not found.' });

    const curriculumRow = await prisma.codeModuleCurriculum.findUnique({
      where: { moduleId },
    });

    if (!curriculumRow) {
      return res.json({
        sourceUrl: null,
        sourceLabel: null,
        hasOfficialContent: false,
        module: {
          id: catalog.id,
          title: catalog.title,
          category: catalog.category,
          description: catalog.description,
          level: catalog.level,
          icon: catalog.icon,
          accentClass: catalog.accentClass,
          bgIconClass: catalog.bgIconClass,
          lessonsCount: catalog.lessons,
          hours: catalog.hours,
          comingSoon: catalog.comingSoon,
          totalDuration: `${catalog.hours}h`,
          totalXp: 0,
          prerequisites: [],
          referenceDocs: [],
          chapters: [],
        },
      });
    }

    const module = parseJson(curriculumRow.curriculum, {});
    res.json({
      sourceUrl: curriculumRow.sourceUrl,
      sourceLabel: curriculumRow.sourceLabel,
      hasOfficialContent: true,
      module,
    });
  } catch (error) {
    console.error('getCodeModuleById', error);
    res.status(500).json({ message: 'Failed to load module curriculum.' });
  }
};

export const executeCode = async (req, res) => {
  try {
    const { code, language = 'python' } = req.body || {};
    if (!code || typeof code !== 'string') {
      return res.status(400).json({ message: 'code is required.' });
    }
    if (language !== 'python') {
      return res.status(400).json({ message: 'Only python is supported for now.' });
    }

    const result = await runPython(code);
    res.json(result);
  } catch (error) {
    console.error('executeCode', error);
    res.status(500).json({ message: 'Failed to execute code.' });
  }
};

function runPython(code) {
  return new Promise((resolve) => {
    const commands = process.platform === 'win32' ? ['py', 'python', 'python3'] : ['python3', 'python'];
    let attempt = 0;

    const tryNext = () => {
      if (attempt >= commands.length) {
        resolve({
          success: false,
          stdout: '',
          stderr: 'Python is not installed. Install Python 3 and try again.',
          exitCode: 1,
        });
        return;
      }

      const cmd = commands[attempt++];
      const child = spawn(cmd, ['-c', code], {
        timeout: 8000,
        windowsHide: true,
      });

      let stdout = '';
      let stderr = '';

      child.stdout?.on('data', (chunk) => {
        stdout += chunk.toString();
      });
      child.stderr?.on('data', (chunk) => {
        stderr += chunk.toString();
      });

      child.on('error', (err) => {
        if (err.code === 'ENOENT') {
          tryNext();
        } else {
          resolve({
            success: false,
            stdout,
            stderr: err.message,
            exitCode: 1,
          });
        }
      });

      child.on('close', (code) => {
        if (code === 0 || stdout || stderr) {
          resolve({
            success: code === 0,
            stdout: stdout.trimEnd(),
            stderr: stderr.trimEnd(),
            exitCode: code ?? 0,
          });
        } else {
          tryNext();
        }
      });
    };

    tryNext();
  });
}
