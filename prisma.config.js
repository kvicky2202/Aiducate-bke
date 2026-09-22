import path from 'path';
import { fileURLToPath } from 'url';
import { defineConfig } from 'prisma/config';
import 'dotenv/config';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

function sqliteUrl() {
  const raw = process.env.DATABASE_URL || 'file:./prisma/dev.db';
  const filePath = raw.replace(/^file:/, '');
  const absolute = path.isAbsolute(filePath)
    ? filePath
    : path.resolve(__dirname, filePath);
  return `file:${absolute}`;
}

export default defineConfig({
  schema: 'prisma/schema.prisma',
  migrate: {
    adapter: async () => {
      const { PrismaBetterSqlite3 } = await import('@prisma/adapter-better-sqlite3');
      return new PrismaBetterSqlite3({ url: sqliteUrl() });
    },
  },
  migrations: {
    seed: 'node prisma/seed.js',
  },
  datasource: {
    url: sqliteUrl(),
  },
});
