import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import prisma from '../config/db.js';
import { shapeUser } from '../utils/serializers.js';

const generateToken = (user) => {
  return jwt.sign(
    { id: user.id, username: user.username, role: user.role },
    process.env.JWT_SECRET || 'dev-secret-change-me',
    { expiresIn: '7d' }
  );
};

const setTokenCookie = (res, token) => {
  res.cookie('token', token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    maxAge: 7 * 24 * 60 * 60 * 1000,
  });
};

export const register = async (req, res) => {
  const body = req.body || {};
  const username = body.username;
  const password = body.password;
  const role = body.role;
  const fullName = body.fullName || body.name;
  const teacherCardId = body.teacherCardId
    ? String(body.teacherCardId).trim()
    : '';

  try {
    if (!fullName || !username || !password || !role) {
      return res.status(400).json({
        success: false,
        message: 'fullName, username, role, and password are required.',
      });
    }

    const formattedRole = String(role).toLowerCase();
    if (!['student', 'teacher'].includes(formattedRole)) {
      return res.status(400).json({ success: false, message: 'Role must be student or teacher.' });
    }

    if (formattedRole === 'teacher' && !teacherCardId) {
      return res.status(400).json({
        success: false,
        message: 'teacherCardId is required when registering as a teacher.',
      });
    }

    if (formattedRole === 'student' && teacherCardId) {
      return res.status(400).json({
        success: false,
        message: 'Students should not provide a teacherCardId. Use role "teacher" with a card ID.',
      });
    }

    const existing = await prisma.user.findUnique({ where: { username } });
    if (existing) {
      return res.status(409).json({ success: false, message: 'Username already taken.' });
    }

    if (teacherCardId) {
      const cardTaken = await prisma.user.findFirst({ where: { teacherCardId } });
      if (cardTaken) {
        return res.status(409).json({ success: false, message: 'Teacher card ID is already registered.' });
      }
    }

    const initials = fullName
      .split(/\s+/)
      .filter(Boolean)
      .map((part) => part[0].toUpperCase())
      .join('')
      .slice(0, 3);

    const passwordHash = await bcrypt.hash(password, 10);
    const user = await prisma.user.create({
      data: {
        id: `usr-${formattedRole}-${Date.now()}`,
        username,
        passwordHash,
        name: fullName,
        role: formattedRole,
        initials: formattedRole === 'teacher' ? initials : undefined,
        teacherCardId: formattedRole === 'teacher' ? teacherCardId : null,
      },
    });

    const token = generateToken(user);
    setTokenCookie(res, token);

    res.status(201).json({
      success: true,
      user: shapeUser(user),
    });
  } catch (error) {
    console.error('Register error:', error);
    res.status(500).json({ success: false, message: 'Server error during registration.' });
  }
};

export const login = async (req, res) => {
  const { username, password } = req.body || {};

  try {
    if (!username || !password) {
      return res.status(400).json({ success: false, message: 'Username and password are required.' });
    }

    const user = await prisma.user.findUnique({ where: { username } });
    if (!user) {
      return res.status(401).json({ success: false, message: 'Invalid credentials.' });
    }

    const isMatch = await bcrypt.compare(password, user.passwordHash);
    if (!isMatch) {
      return res.status(401).json({ success: false, message: 'Invalid credentials.' });
    }

    const token = generateToken(user);
    setTokenCookie(res, token);

    res.json({
      success: true,
      user: shapeUser(user),
    });
  } catch (error) {
    console.error('Login error:', error);
    res.status(500).json({ success: false, message: 'Server error during login.' });
  }
};

export const logout = (req, res) => {
  res.clearCookie('token');
  res.json({ success: true, message: 'Logged out.' });
};

export const getMe = async (req, res) => {
  try {
    const user = await prisma.user.findUnique({ where: { id: req.user.id } });
    if (!user) {
      return res.status(404).json({ success: false, message: 'User not found.' });
    }
    res.json({
      success: true,
      user: shapeUser(user),
    });
  } catch (error) {
    console.error('GetMe error:', error);
    res.status(500).json({ success: false, message: 'Server error.' });
  }
};
