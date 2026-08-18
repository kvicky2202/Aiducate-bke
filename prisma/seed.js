// prisma/seed.js
import pkg from '@prisma/client';
import { PrismaBetterSqlite3 } from '@prisma/adapter-better-sqlite3';
//import Database from 'better-sqlite3';
import bcrypt from 'bcryptjs';

const { PrismaClient } = pkg;

// Initialize SQLite connection with driver adapter
 
const adapter = new PrismaBetterSqlite3({ url: 'file:./prisma/dev.db' });
const prisma = new PrismaClient({ adapter });

async function main() {
  console.log('Starting database seeding...');

  // Hash default password for test accounts
  const hashedPassword = await bcrypt.hash('1234', 10);

  // 1. Seed Demo Student
  const student = await prisma.user.upsert({
    where: { username: 'student1' },
    update: {},
    create: {
      username: 'student1',
      passwordHash: hashedPassword,
      role: 'STUDENT',
      avatarPreference: 'explorer_1',
      status: 'ON_TRACK',
      strength: 'Coding & Logic',
      progress: 35,
    },
  });

  // 2. Seed Demo Educator
  const teacher = await prisma.user.upsert({
    where: { username: 'teacher1' },
    update: {},
    create: {
      username: 'teacher1',
      passwordHash: hashedPassword,
      role: 'TEACHER',
      strength: 'STEM & English Curriculum',
    },
  });

  // 3. Seed Initial Modules (General Science, English, Math, Coding)
  const modules = [
    {
      title: 'Introduction to Photosynthesis',
      subject: 'General Science',
      gradeLevel: 6,
      content: 'Understand how plants convert sunlight, water, and air into energy.',
    },
    {
      title: 'Mastering Sentence Structure & Grammar',
      subject: 'English',
      gradeLevel: 6,
      content: 'Learn clauses, conjunctions, and clear sentence organization.',
    },
    {
      title: 'Fractions & Decimals in Everyday Life',
      subject: 'Math',
      gradeLevel: 5,
      content: 'Convert fractions to decimals and apply them to budgeting scenarios.',
    },
    {
      title: 'Algorithms & Variables with JavaScript',
      subject: 'Coding',
      gradeLevel: 7,
      content: 'Learn how to store values in variables and write basic step-by-step algorithms.',
    },
  ];

  for (const mod of modules) {
    await prisma.module.create({
      data: mod,
    });
  }

  console.log('Database successfully seeded!');
  console.log(`Users created: ${student.username} (Student), ${teacher.username} (Teacher)`);
  console.log(`Modules created across General Science, English, Math, and Coding.`);
}

main()
  .catch((e) => {
    console.error('Error seeding database:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });