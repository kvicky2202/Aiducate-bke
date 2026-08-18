import { defineConfig } from 'prisma/config';
import { PrismaBetterSqlite3 } from '@prisma/adapter-better-sqlite3'
import 'dotenv/config';

 
   
export default defineConfig({
  schema: 'prisma/schema.prisma',

  migrate: {
    adapter: async () => {
      return new PrismaBetterSqlite3({ url: process.env.DATABASE_URL || 'file:./prisma/dev.db' });
    },
  },

  migrations: {
    seed: 'node prisma/seed.js',
  },

  datasource: {
    url: process.env.DATABASE_URL || 'file:./prisma/dev.db',
  },
});