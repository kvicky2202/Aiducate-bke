import path from 'path';
import { fileURLToPath } from 'url';
import { PrismaClient } from '../generated/prisma/index.js';
import { PrismaBetterSqlite3 } from '@prisma/adapter-better-sqlite3';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

function sqliteUrl() {
  const raw = process.env.DATABASE_URL || 'file:./prisma/dev.db';
  const filePath = raw.replace(/^file:/, '');
  const absolute = path.isAbsolute(filePath)
    ? filePath
    : path.resolve(process.cwd(), filePath);
  return `file:${absolute}`;
}

const adapter = new PrismaBetterSqlite3({ url: sqliteUrl() });
const prisma = new PrismaClient({ adapter });

export default prisma;
