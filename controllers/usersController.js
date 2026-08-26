import prisma from '../config/db.js';
import { parseJson, toJson } from '../utils/json.js';
import { shapeUser } from '../utils/serializers.js';

export const listUsers = async (req, res) => {
  try {
    const users = await prisma.user.findMany();
    let shaped = users.map(shapeUser);
    if (req.query.role) {
      const role = String(req.query.role).toLowerCase();
      shaped = shaped.filter((u) => u.role === role);
    }
    res.json(shaped);
  } catch (error) {
    console.error('listUsers', error);
    res.status(500).json({ message: 'Failed to load users.' });
  }
};

export const getUserById = async (req, res) => {
  try {
    const user = await prisma.user.findUnique({ where: { id: req.params.id } });
    if (!user) return res.status(404).json({ message: 'User not found.' });
    res.json(shapeUser(user));
  } catch (error) {
    console.error('getUserById', error);
    res.status(500).json({ message: 'Failed to load user.' });
  }
};

export const patchUser = async (req, res) => {
  try {
    const allowed = [
      'equippedGear',
      'voiceId',
      'speechSpeed',
      'enrolledClassIds',
      'exp',
      'stars',
      'streak',
      'avatarUrl',
      'name',
    ];
    const data = {};
    for (const key of allowed) {
      if (req.body[key] === undefined) continue;
      if (key === 'enrolledClassIds') {
        data.enrolledClassIds = toJson(req.body.enrolledClassIds);
      } else {
        data[key] = req.body[key];
      }
    }

    const user = await prisma.user.update({
      where: { id: req.params.id },
      data,
    });
    res.json(shapeUser(user));
  } catch (error) {
    console.error('patchUser', error);
    res.status(500).json({ message: 'Failed to update user.' });
  }
};

export const enrollUserInClass = async (req, res) => {
  try {
    const { userId, classId } = req.body;
    const user = await prisma.user.findUnique({ where: { id: userId } });
    if (!user) return res.status(404).json({ message: 'User not found.' });

    const ids = parseJson(user.enrolledClassIds, []);
    if (!ids.includes(classId)) {
      ids.push(classId);
      const updated = await prisma.user.update({
        where: { id: userId },
        data: { enrolledClassIds: toJson(ids) },
      });
      await prisma.classroom.update({
        where: { id: classId },
        data: { studentCount: { increment: 1 } },
      });
      return res.json(shapeUser(updated));
    }
    res.json(shapeUser(user));
  } catch (error) {
    console.error('enrollUserInClass', error);
    res.status(500).json({ message: 'Failed to enroll user.' });
  }
};
