import { parseJson } from './json.js';

export function shapeUser(user) {
  if (!user) return null;
  return {
    id: user.id,
    username: user.username,
    name: user.name,
    fullName: user.name,
    role: user.role,
    teacherCardId: user.teacherCardId || undefined,
    avatarUrl: user.avatarUrl || undefined,
    initials: user.initials || undefined,
    email: user.email || undefined,
    stars: user.stars,
    exp: user.exp,
    streak: user.streak,
    enrolledClassIds: parseJson(user.enrolledClassIds, []),
    createdClassIds: parseJson(user.createdClassIds, []),
    equippedGear: user.equippedGear || undefined,
    voiceId: user.voiceId || undefined,
    speechSpeed: user.speechSpeed ?? undefined,
  };
}

export function shapeAssignmentQuiz(row) {
  if (!row) return null;
  return {
    id: row.id,
    assignmentId: row.assignmentId,
    questions: parseJson(row.questions, []),
  };
}

export function shapeAssignmentResult(row) {
  if (!row) return null;
  return {
    id: row.id,
    assignmentId: row.assignmentId,
    studentId: row.studentId,
    studentName: row.studentName || undefined,
    score: row.score,
    totalPoints: row.totalPoints,
    answers: parseJson(row.answers, []),
    status: row.status,
    submittedAt: row.submittedAt,
  };
}

export function shapeClassMaterial(row) {
  if (!row) return null;
  return {
    id: row.id,
    classId: row.classId,
    title: row.title,
    uploadedAt: row.uploadedAt,
    summary: row.summary || '',
    fileName: row.fileName || undefined,
    mimeType: row.mimeType || undefined,
    uploadedById: row.uploadedById || undefined,
    fileUrl: row.filePath ? `/uploads/materials/${pathBasename(row.filePath)}` : undefined,
  };
}

function pathBasename(filePath) {
  if (!filePath) return undefined;
  const parts = String(filePath).split(/[/\\]/);
  return parts[parts.length - 1];
}

export function shapeQuizQuestionSet(row) {
  if (!row) return null;
  return {
    id: row.id,
    quizId: row.quizId,
    questions: parseJson(row.questions, []),
  };
}

export function shapeGrowthJourney(row) {
  if (!row) return null;
  return {
    weeklyGoal: row.weeklyGoal,
    days: parseJson(row.days, []),
  };
}

export function omitId(row) {
  if (!row) return null;
  const { id, ...rest } = row;
  return rest;
}
