import prisma from '../config/db.js';
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
      'exp',
      'stars',
      'streak',
      'avatarUrl',
      'name',
    ];
    const data = {};
    for (const key of allowed) {
      if (req.body[key] === undefined) continue;
      data[key] = req.body[key];
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

export const deleteUser = async (req, res) => {
  try {
    const user = await prisma.user.findUnique({ where: { id: req.params.id } });
    if (!user) return res.status(404).json({ message: 'User not found.' });

    await prisma.user.delete({ where: { id: req.params.id } });
    res.json({ success: true, message: 'User deleted.', id: req.params.id });
  } catch (error) {
    console.error('deleteUser', error);
    res.status(500).json({ message: 'Failed to delete user.' });
  }
};
