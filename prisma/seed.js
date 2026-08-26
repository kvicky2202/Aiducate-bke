import pkg from '@prisma/client';
import { PrismaBetterSqlite3 } from '@prisma/adapter-better-sqlite3';
import bcrypt from 'bcryptjs';

const { PrismaClient } = pkg;
const adapter = new PrismaBetterSqlite3({ url: 'file:./prisma/dev.db' });
const prisma = new PrismaClient({ adapter });

async function main() {
  console.log('Starting database seeding...');
  const hashedPassword = await bcrypt.hash('1234', 10);

  await prisma.user.upsert({
    where: { username: 'student1' },
    update: {},
    create: {
      id: 'usr-student-1',
      username: 'student1',
      passwordHash: hashedPassword,
      name: 'Chifundo Banda',
      role: 'student',
      avatarUrl:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuAniaQsdhr3sin2Nahria0no__GqspP0i9OeqacTdjTax305VdwIFl-jR7yv-uXFEDboprDY13U3yHfyFXRfJBZtYdBAXXjjBe-oF5lLJ64ozj_QlXWliHI6v3z-U_P02UH39PCXNQPCI-SIrDgViDatKsP-fWvYLw13uqJeTmgAAKtZnDfW7KzTvb70H3IlEXlUMViLXPwSo5Btv_tHU5FFOylXlNWxX7sVG_pRf5CE98NNw4Z2VKq2UoFfOF74Ab6jGf4OIo8dUSZ',
      stars: 250,
      exp: 1640,
      streak: 3,
      enrolledClassIds: JSON.stringify(['cls-101', 'cls-102']),
      equippedGear: 'Sci-Lab Coat',
      voiceId: 'v-1',
      speechSpeed: 1.2,
    },
  });

  await prisma.user.upsert({
    where: { username: 'teacher1' },
    update: {},
    create: {
      id: 'usr-teacher-1',
      username: 'teacher1',
      passwordHash: hashedPassword,
      name: 'Victoria Kukada',
      role: 'teacher',
      initials: 'VK',
      email: 'victoria@aiducate.ac.mw',
      teacherCardId: 'TCH-1001',
      createdClassIds: JSON.stringify(['cls-101', 'cls-102']),
    },
  });

  const classes = [
    {
      id: 'cls-101',
      code: 'MATH-2',
      name: 'Grade 2 Mathematics',
      section: 'Standard 2',
      subject: 'Math',
      teacherId: 'usr-teacher-1',
      teacherName: 'Victoria Kukada',
      studentCount: 28,
      bannerColor: 'from-primary to-secondary',
      schedule: 'Mon, Wed, Fri',
      progress: 85,
    },
    {
      id: 'cls-102',
      code: 'SCI-8',
      name: 'Elementary Science Labs',
      section: 'Standard 8',
      subject: 'General Science',
      teacherId: 'usr-teacher-1',
      teacherName: 'Victoria Kukada',
      studentCount: 24,
      bannerColor: 'from-tertiary to-purple-600',
      schedule: 'Tue, Thu',
      progress: 92,
    },
  ];

  for (const row of classes) {
    await prisma.classroom.upsert({
      where: { id: row.id },
      update: {},
      create: row,
    });
  }

  const materials = [
    {
      id: 'mat-101',
      classId: 'cls-101',
      title: 'Unit 2: Linear Equations & Algebra Notes.pdf',
      uploadedAt: '2026-08-20',
      summary: 'Covers basic single-variable equation solving and algebraic simplification rules.',
    },
    {
      id: 'mat-102',
      classId: 'cls-102',
      title: 'Chapter 4: Photosynthesis & Plant Cells.pdf',
      uploadedAt: '2026-08-21',
      summary: 'Covers chloroplast structures, light reactions, and carbon dioxide absorption.',
    },
  ];

  for (const row of materials) {
    await prisma.classMaterial.upsert({
      where: { id: row.id },
      update: {},
      create: row,
    });
  }

  const assignments = [
    {
      id: 'asgn-1',
      classId: 'cls-101',
      materialId: 'mat-101',
      title: 'Algebraic Expressions Practice',
      dueDate: '2026-08-28',
      totalPoints: 100,
      status: 'completed',
      submissionCount: 18,
      score: 100,
    },
    {
      id: 'asgn-2',
      classId: 'cls-102',
      materialId: 'mat-102',
      title: 'Photosynthesis Quiz Prep',
      dueDate: '2026-08-30',
      totalPoints: 50,
      status: 'completed',
      submissionCount: 22,
      score: 50,
    },
  ];

  for (const row of assignments) {
    await prisma.assignment.upsert({
      where: { id: row.id },
      update: {},
      create: row,
    });
  }

  const assignmentQuizzes = [
    {
      id: 'qset-1',
      assignmentId: 'asgn-1',
      questions: JSON.stringify([
        {
          id: 1,
          prompt: 'Solve for x : 2x + 6 = 14',
          options: ['x = 3', 'x = 4', 'x = 5', 'x = 8'],
          correctAnswer: 1,
        },
        {
          id: 2,
          prompt: 'Which of the following is a prime number?',
          options: ['15', '21', '29', '33'],
          correctAnswer: 2,
        },
      ]),
    },
    {
      id: 'qset-2',
      assignmentId: 'asgn-2',
      questions: JSON.stringify([
        {
          id: 1,
          prompt: 'What primary gas do plants absorb during photosynthesis?',
          options: ['Oxygen', 'Carbon Dioxide', 'Nitrogen', 'Hydrogen'],
          correctAnswer: 1,
        },
        {
          id: 2,
          prompt: 'Which organelle in plant cells handles photosynthesis?',
          options: ['Mitochondria', 'Nucleus', 'Chloroplast', 'Ribosome'],
          correctAnswer: 2,
        },
      ]),
    },
  ];

  for (const row of assignmentQuizzes) {
    await prisma.assignmentQuiz.upsert({
      where: { id: row.id },
      update: {},
      create: row,
    });
  }

  const quizzes = [
    {
      id: 'qz-1',
      subject: 'English',
      title: 'Vocabulary Master',
      questionCount: 10,
      xpReward: 100,
      badgeColor: 'bg-primary text-white',
    },
    {
      id: 'qz-2',
      subject: 'Math',
      title: 'Algebra Speed Challenge',
      questionCount: 15,
      xpReward: 150,
      badgeColor: 'bg-secondary text-white',
    },
  ];

  for (const row of quizzes) {
    await prisma.quiz.upsert({
      where: { id: row.id },
      update: {},
      create: row,
    });
  }

  const quizQuestionSets = [
    {
      id: 'qq-1',
      quizId: 'qz-1',
      questions: JSON.stringify([
        {
          id: 1,
          prompt: 'Which of the following is an adjective?',
          options: [
            { id: 'A', label: 'Run' },
            { id: 'B', label: 'Quickly' },
            { id: 'C', label: 'Tallest' },
            { id: 'D', label: 'Shoe' },
          ],
          correctOptionId: 'C',
          xpReward: 20,
        },
        {
          id: 2,
          prompt: "Choose the synonym for 'happy'.",
          options: [
            { id: 'A', label: 'Sad' },
            { id: 'B', label: 'Joyful' },
            { id: 'C', label: 'Angry' },
            { id: 'D', label: 'Tired' },
          ],
          correctOptionId: 'B',
          xpReward: 20,
        },
        {
          id: 3,
          prompt: 'Which word is a noun?',
          options: [
            { id: 'A', label: 'Beautiful' },
            { id: 'B', label: 'Malawi' },
            { id: 'C', label: 'Quickly' },
            { id: 'D', label: 'Jump' },
          ],
          correctOptionId: 'B',
          xpReward: 20,
        },
        {
          id: 4,
          prompt: "What is the opposite of 'ancient'?",
          options: [
            { id: 'A', label: 'Old' },
            { id: 'B', label: 'Modern' },
            { id: 'C', label: 'Historic' },
            { id: 'D', label: 'Antique' },
          ],
          correctOptionId: 'B',
          xpReward: 20,
        },
        {
          id: 5,
          prompt: 'Which sentence uses correct grammar?',
          options: [
            { id: 'A', label: 'She go to school.' },
            { id: 'B', label: 'She goes to school.' },
            { id: 'C', label: 'She going to school.' },
            { id: 'D', label: 'She gone to school.' },
          ],
          correctOptionId: 'B',
          xpReward: 20,
        },
      ]),
    },
    {
      id: 'qq-2',
      quizId: 'qz-2',
      questions: JSON.stringify([
        {
          id: 1,
          prompt: 'Solve for x: x + 5 = 12',
          options: [
            { id: 'A', label: '5' },
            { id: 'B', label: '6' },
            { id: 'C', label: '7' },
            { id: 'D', label: '8' },
          ],
          correctOptionId: 'C',
          xpReward: 30,
        },
        {
          id: 2,
          prompt: 'What is 3² ?',
          options: [
            { id: 'A', label: '6' },
            { id: 'B', label: '9' },
            { id: 'C', label: '12' },
            { id: 'D', label: '3' },
          ],
          correctOptionId: 'B',
          xpReward: 30,
        },
        {
          id: 3,
          prompt: 'Simplify: 2x + 3x',
          options: [
            { id: 'A', label: '5x' },
            { id: 'B', label: '6x' },
            { id: 'C', label: 'x' },
            { id: 'D', label: '5x²' },
          ],
          correctOptionId: 'A',
          xpReward: 30,
        },
        {
          id: 4,
          prompt: 'Solve: 2x = 10',
          options: [
            { id: 'A', label: '2' },
            { id: 'B', label: '5' },
            { id: 'C', label: '10' },
            { id: 'D', label: '20' },
          ],
          correctOptionId: 'B',
          xpReward: 30,
        },
        {
          id: 5,
          prompt: 'What is the value of x in 3x - 4 = 11?',
          options: [
            { id: 'A', label: '3' },
            { id: 'B', label: '4' },
            { id: 'C', label: '5' },
            { id: 'D', label: '6' },
          ],
          correctOptionId: 'C',
          xpReward: 30,
        },
      ]),
    },
  ];

  for (const row of quizQuestionSets) {
    await prisma.quizQuestionSet.upsert({
      where: { id: row.id },
      update: {},
      create: row,
    });
  }

  const stories = [
    {
      id: 'st-1',
      title: 'The Happy Cat',
      difficulty: 'Easy',
      starsReward: 1,
      content: 'The cat sat on the mat under the warm afternoon sun...',
    },
    {
      id: 'st-2',
      title: 'Space Explorer Kondwani',
      difficulty: 'Medium',
      starsReward: 2,
      content: 'The rocket blasted into the night sky heading toward Mars...',
    },
    {
      id: 'st-3',
      title: 'The Night Owl',
      difficulty: 'Advanced',
      starsReward: 3,
      content: ' This is an owl that always  ..',
    },
  ];

  for (const row of stories) {
    await prisma.story.upsert({
      where: { id: row.id },
      update: {},
      create: row,
    });
  }

  await prisma.dailyObjective.upsert({
    where: { id: 'singleton' },
    update: {},
    create: {
      id: 'singleton',
      completedQuizzes: 5,
      targetQuizzes: 2,
      bonusUnlocked: false,
    },
  });

  await prisma.codeLabProgress.upsert({
    where: { id: 'singleton' },
    update: {},
    create: {
      id: 'singleton',
      currentPath: 'Python Fundamentals',
      description:
        "Master the basics of the world's most popular language. From variables to loops, your coding journey starts here in the digital savannah.",
      completionPercentage: 35,
      status: 'Active',
    },
  });

  const codeModules = [
    {
      id: 'mod-1',
      title: 'Web Magic with HTML/CSS',
      description: 'Learn to build beautiful websites from scratch. Style your ideas with modern CSS techniques.',
      level: 'Beginner',
      icon: 'magic_button',
      lessons: 12,
      hours: 8,
      accentClass: 'text-[#00dce5]',
      bgIconClass: 'bg-[#00f4fe]/20 text-[#00dce5]',
      isWide: false,
      isNew: false,
    },
    {
      id: 'mod-2',
      title: 'Data Detective with SQL',
      description: 'Uncover hidden stories in data. Master the language of databases and data visualization.',
      level: 'Intermediate',
      icon: 'database',
      lessons: 8,
      hours: 6,
      accentClass: 'text-[#d5bbff]',
      bgIconClass: 'bg-[#8b44f7]/20 text-[#d5bbff]',
      isWide: false,
      isNew: false,
    },
    {
      id: 'mod-3',
      title: 'AI Explorer',
      description:
        'Dive into the world of Artificial Intelligence. Build your first neural network and understand the future of tech.',
      level: 'Advanced',
      icon: 'psychology',
      lessons: 15,
      hours: 10,
      accentClass: 'text-[#ffaced]',
      bgIconClass: 'bg-[#ca00be]/20 text-[#ffaced]',
      isWide: true,
      isNew: true,
    },
  ];

  for (const row of codeModules) {
    await prisma.codeModule.upsert({
      where: { id: row.id },
      update: {},
      create: row,
    });
  }

  await prisma.growthJourney.upsert({
    where: { id: 'singleton' },
    update: {},
    create: {
      id: 'singleton',
      weeklyGoal: '3h 45m / 5h',
      days: JSON.stringify([
        { label: 'Mon', height: '65%', current: false },
        { label: 'Tue', height: '40%', current: false },
        { label: 'Wed', height: '85%', current: true },
        { label: 'Thu', height: '10%', current: false },
        { label: 'Fri', height: '0%', current: false },
      ]),
    },
  });

  const wardrobe = [
    {
      id: 'gear-1',
      name: 'Sci-Lab Coat',
      image:
        'https://images.unsplash.com/photo-1639628735078-ed2f038a193e?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      locked: false,
    },
    {
      id: 'gear-2',
      name: 'Neon VR Lens',
      image:
        'https://plus.unsplash.com/premium_photo-1739561888903-59486ac85c6e?q=80&w=1925&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      locked: false,
    },
    {
      id: 'gear-3',
      name: 'Gravity Kicks',
      image:
        'https://plus.unsplash.com/premium_photo-1738614647398-25bd0bfba344?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDl8fHxlbnwwfHx8fHw%3D',
      locked: false,
    },
    {
      id: 'gear-4',
      name: 'NASA Scout',
      image:
        'https://media.istockphoto.com/id/1847442858/photo/space-man-in-a-yellow-space-suit-3d-render.webp?a=1&b=1&s=612x612&w=0&k=20&c=Vk4SxP7Mfq8Ku5JsiR7xREaDfZ1kPH7lSN2CFvIcKd0=',
      locked: false,
    },
    { id: 'gear-5', name: 'Chem Mask', image: '', locked: true, lvl: 15 },
    { id: 'gear-6', name: 'Hologram Hat', image: '', locked: true, lvl: 20 },
  ];

  for (const row of wardrobe) {
    await prisma.wardrobeItem.upsert({
      where: { id: row.id },
      update: {},
      create: row,
    });
  }

  const voices = [
    { id: 'v-1', name: 'Zola', desc: 'Energetic & Fun' },
    { id: 'v-2', name: 'Professor P', desc: 'Wise & Calm' },
    { id: 'v-3', name: 'Spark', desc: 'Fast & Robotic' },
  ];

  for (const row of voices) {
    await prisma.aiVoice.upsert({
      where: { id: row.id },
      update: {},
      create: row,
    });
  }

  console.log('Database successfully seeded!');
  console.log('Logins: student1 / 1234  and  teacher1 / 1234');
}

main()
  .catch((e) => {
    console.error('Error seeding database:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
