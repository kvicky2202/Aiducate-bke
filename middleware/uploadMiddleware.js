import fs from 'fs';
import path from 'path';
import multer from 'multer';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
export const uploadsRoot = path.join(__dirname, '..', 'uploads');
export const materialsDir = path.join(uploadsRoot, 'materials');

fs.mkdirSync(materialsDir, { recursive: true });

const storage = multer.diskStorage({
  destination: (_req, _file, cb) => cb(null, materialsDir),
  filename: (_req, file, cb) => {
    const safe = file.originalname.replace(/[^a-zA-Z0-9._-]/g, '_');
    cb(null, `${Date.now()}-${safe}`);
  },
});

function pdfOnly(_req, file, cb) {
  const ok =
    file.mimetype === 'application/pdf' ||
    file.originalname.toLowerCase().endsWith('.pdf');
  if (!ok) return cb(new Error('Only PDF files are allowed.'));
  cb(null, true);
}

export const uploadMaterialPdf = multer({
  storage,
  fileFilter: pdfOnly,
  limits: { fileSize: 15 * 1024 * 1024 },
}).single('file');
