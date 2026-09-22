import jwt from 'jsonwebtoken';

function readBearer(req) {
  const header = req.headers.authorization || req.headers.Authorization;
  if (!header || typeof header !== 'string') return null;
  if (!header.startsWith('Bearer ')) return null;
  const token = header.slice(7).trim();
  return token || null;
}

function readRoleCookie(req, role) {
  if (role === 'teacher') return req.cookies?.token_teacher || null;
  if (role === 'student') return req.cookies?.token_student || null;
  return null;
}

export const extractToken = (req) => {
  const bearer = readBearer(req);
  if (bearer) return bearer;

  const headerRole = String(req.headers['x-auth-role'] || '').toLowerCase();
  const roleCookie = readRoleCookie(req, headerRole);
  if (roleCookie) return roleCookie;

  const student = req.cookies?.token_student;
  const teacher = req.cookies?.token_teacher;
  if (student && teacher) return null;
  return student || teacher || req.cookies?.token || null;
};

export const verifyToken = (req, res, next) => {
  const token = extractToken(req);

  if (!token) {
    return res.status(401).json({ success: false, message: 'Not authenticated.' });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET || 'dev-secret-change-me');
    req.user = decoded; // { id, username, role }
    next();
  } catch (error) {
    return res.status(401).json({ success: false, message: 'Invalid or expired token.' });
  }
};

export const requireRole = (...allowedRoles) => {
  return (req, res, next) => {
    if (!req.user || !allowedRoles.includes(req.user.role)) {
      return res.status(403).json({ success: false, message: 'Access denied.' });
    }
    next();
  };
};
