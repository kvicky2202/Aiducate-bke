// controllers/authController.js
import prisma from '../config/db.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

export const login = async (req, res) => {
  const { role, username, password } = req.body;

  try {
    if (!username || !password || !role) {
      return res.status(400).json({ 
        success: false, 
        message: 'Role, username, and password are required.' 
      });
    }

    // Convert role string to uppercase to match schema convention ("STUDENT" / "TEACHER")
    const formattedRole = role.toUpperCase();

    // Find existing user or create a demo user if database is fresh
    let user = await prisma.user.findUnique({
      where: { username },
    });

    // Seed account dynamically for quick testing/development
    if (!user) {
      const passwordHash = await bcrypt.hash(password, 10);
      user = await prisma.user.create({
        data: {
          username,
          passwordHash,
          role: formattedRole,
          strength: formattedRole === 'TEACHER' ? 'STEM Curriculum' : 'General STEM',
        },
      });
    } else {
      // Validate password if user already exists
      const isMatch = await bcrypt.compare(password, user.passwordHash);
      if (!isMatch) {
        return res.status(401).json({ 
          success: false, 
          message: 'Invalid credentials.' 
        });
      }
    }

    // Generate JWT token
    const token = jwt.sign(
      { id: user.id, username: user.username, role: user.role },
      process.env.JWT_SECRET || 'fallback_secret_key',
      { expiresIn: '7d' }
    );

    res.json({
      success: true,
      token,
      role: user.role,
      user: {
        id: user.id,
        username: user.username,
        role: user.role,
        avatarPreference: user.avatarPreference,
        status: user.status,
      },
    });
  } catch (error) {
    console.error('Login error:', error);
    res.status(500).json({ success: false, message: 'Server error during login.' });
  }
};