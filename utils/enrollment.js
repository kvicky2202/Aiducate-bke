import prisma from '../config/db.js';
import { parseJson } from './json.js';

/**
 * Verify a student is enrolled in a class.
 */
export async function assertStudentEnrolled(studentId, classId) {
  if (!studentId || !classId) {
    return { ok: false, status: 400, message: 'studentId and classId are required.' };
  }

  const student = await prisma.user.findUnique({ where: { id: studentId } });
  if (!student) return { ok: false, status: 404, message: 'Student not found.' };
  if (student.role !== 'student') {
    return { ok: false, status: 403, message: 'Only students can access class practice content.' };
  }

  const enrolled = parseJson(student.enrolledClassIds, []);
  if (!enrolled.includes(classId)) {
    return { ok: false, status: 403, message: 'You are not enrolled in this class.' };
  }

  return { ok: true, student };
}
