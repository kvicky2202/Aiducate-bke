/** OpenAPI 3 spec for AIDucate API — served at /api-docs */
export const openApiSpec = {
  openapi: '3.0.3',
  info: {
    title: 'AIDucate API',
    version: '1.0.0',
    description:
      'Backend for AIDucate. Auth uses httpOnly cookie `token` after login/register. Base URL defaults to http://localhost:5000',
  },
  servers: [{ url: 'http://localhost:5000', description: 'Local' }],
  tags: [
    { name: 'Auth', description: 'Register, login, logout, current user' },
    { name: 'Users', description: 'User profiles and settings' },
    { name: 'Classes', description: 'Create classes, join/leave with code' },
    { name: 'Materials', description: 'Class materials' },
    { name: 'Assignments', description: 'Assignments and assignment quizzes' },
    { name: 'Quizzes', description: 'Practice quizzes, stories, daily objective' },
    { name: 'Catalog', description: 'Wardrobe, voices, code lab, growth' },
    { name: 'AI', description: 'Mock AI quiz generation and educator assistant' },
    { name: 'Health', description: 'Server health' },
  ],
  paths: {
    '/health': {
      get: {
        tags: ['Health'],
        summary: 'Health check',
        responses: {
          200: {
            description: 'OK',
            content: {
              'application/json': {
                example: { message: 'AIDucate API is running smoothly!' },
              },
            },
          },
        },
      },
    },

    // ---- Auth ----
    '/api/register': {
      post: {
        tags: ['Auth'],
        summary: 'Register student or teacher',
        requestBody: {
          required: true,
          content: {
            'application/json': {
              schema: { $ref: '#/components/schemas/RegisterBody' },
              examples: {
                student: {
                  value: {
                    fullName: 'Ada Phiri',
                    username: 'ada',
                    password: '1234',
                    role: 'student',
                  },
                },
                teacher: {
                  value: {
                    fullName: 'Victoria Kukada',
                    username: 'victoria',
                    password: '1234',
                    role: 'teacher',
                    teacherCardId: 'TCH-2048',
                  },
                },
              },
            },
          },
        },
        responses: {
          201: { description: 'Created — sets cookie `token`' },
          400: { description: 'Missing fields / invalid role / teacherCardId rules' },
          409: { description: 'Username or teacherCardId already taken' },
        },
      },
    },
    '/api/login': {
      post: {
        tags: ['Auth'],
        summary: 'Login with username and password',
        requestBody: {
          required: true,
          content: {
            'application/json': {
              schema: {
                type: 'object',
                required: ['username', 'password'],
                properties: {
                  username: { type: 'string', example: 'student1' },
                  password: { type: 'string', example: '1234' },
                },
              },
            },
          },
        },
        responses: {
          200: { description: 'OK — sets cookie `token`' },
          401: { description: 'Invalid credentials' },
        },
      },
    },
    '/api/logout': {
      post: {
        tags: ['Auth'],
        summary: 'Clear auth cookie',
        responses: { 200: { description: 'Logged out' } },
      },
    },
    '/api/me': {
      get: {
        tags: ['Auth'],
        summary: 'Current user (requires cookie)',
        responses: {
          200: { description: 'Current user' },
          401: { description: 'Not authenticated' },
        },
      },
    },

    // ---- Users ----
    '/users': {
      get: {
        tags: ['Users'],
        summary: 'List users',
        parameters: [
          {
            name: 'role',
            in: 'query',
            schema: { type: 'string', enum: ['student', 'teacher'] },
            example: 'student',
          },
        ],
        responses: { 200: { description: 'Array of users' } },
      },
    },
    '/users/{id}': {
      get: {
        tags: ['Users'],
        summary: 'Get user by id',
        parameters: [{ $ref: '#/components/parameters/UserId' }],
        responses: {
          200: { description: 'User' },
          404: { description: 'Not found' },
        },
      },
      patch: {
        tags: ['Users'],
        summary: 'Update user settings (gear, voice, exp, etc.)',
        parameters: [{ $ref: '#/components/parameters/UserId' }],
        requestBody: {
          content: {
            'application/json': {
              schema: {
                type: 'object',
                properties: {
                  equippedGear: { type: 'string' },
                  voiceId: { type: 'string' },
                  speechSpeed: { type: 'number' },
                  exp: { type: 'integer' },
                  stars: { type: 'integer' },
                  streak: { type: 'integer' },
                  avatarUrl: { type: 'string' },
                  name: { type: 'string' },
                },
              },
              example: { equippedGear: 'Sci-Lab Coat', voiceId: 'v-1', speechSpeed: 1.2 },
            },
          },
        },
        responses: { 200: { description: 'Updated user' } },
      },
      delete: {
        tags: ['Users'],
        summary: 'Delete user',
        parameters: [{ $ref: '#/components/parameters/UserId' }],
        responses: {
          200: { description: 'Deleted' },
          404: { description: 'Not found' },
        },
      },
    },

    // ---- Classes ----
    '/classes': {
      get: {
        tags: ['Classes'],
        summary: 'List classes',
        parameters: [
          { name: 'code', in: 'query', schema: { type: 'string' }, description: 'Join code filter' },
          { name: 'teacherId', in: 'query', schema: { type: 'string' } },
        ],
        responses: { 200: { description: 'Array of classes' } },
      },
      post: {
        tags: ['Classes'],
        summary: 'Teacher creates a class (auto-generates join code)',
        requestBody: {
          required: true,
          content: {
            'application/json': {
              schema: {
                type: 'object',
                required: ['teacherId', 'name', 'section', 'subject'],
                properties: {
                  teacherId: { type: 'string', example: 'usr-teacher-1' },
                  name: { type: 'string', example: 'Grade 5 English' },
                  section: { type: 'string', example: 'Standard 5' },
                  subject: { type: 'string', example: 'English' },
                  schedule: { type: 'string', example: 'Mon, Wed' },
                  bannerColor: { type: 'string' },
                },
              },
            },
          },
        },
        responses: {
          201: {
            description: 'Created — response includes `code` to share with students',
          },
          403: { description: 'Not a teacher' },
        },
      },
    },
    '/classes/join': {
      post: {
        tags: ['Classes'],
        summary: 'Student joins with shared class code',
        requestBody: {
          required: true,
          content: {
            'application/json': {
              schema: {
                type: 'object',
                required: ['userId', 'code'],
                properties: {
                  userId: { type: 'string', example: 'usr-student-1' },
                  code: { type: 'string', example: 'MATH-2' },
                },
              },
            },
          },
        },
        responses: {
          201: { description: 'Joined' },
          200: { description: 'Already joined' },
          404: { description: 'Invalid code' },
        },
      },
    },
    '/classes/leave': {
      post: {
        tags: ['Classes'],
        summary: 'Student leaves a class',
        requestBody: {
          required: true,
          content: {
            'application/json': {
              schema: {
                type: 'object',
                required: ['userId', 'classId'],
                properties: {
                  userId: { type: 'string', example: 'usr-student-1' },
                  classId: { type: 'string', example: 'cls-101' },
                },
              },
            },
          },
        },
        responses: {
          200: { description: 'Left class' },
          400: { description: 'Not enrolled' },
        },
      },
    },
    '/classes/{id}': {
      get: {
        tags: ['Classes'],
        summary: 'Get class by id',
        parameters: [
          {
            name: 'id',
            in: 'path',
            required: true,
            schema: { type: 'string' },
            example: 'cls-101',
          },
        ],
        responses: {
          200: { description: 'Class' },
          404: { description: 'Not found' },
        },
      },
    },

    // ---- Materials ----
    '/classMaterials': {
      get: {
        tags: ['Materials'],
        summary: 'List class materials',
        parameters: [
          { name: 'classId', in: 'query', schema: { type: 'string' }, example: 'cls-101' },
        ],
        responses: { 200: { description: 'Array of materials (includes fileUrl when uploaded)' } },
      },
      post: {
        tags: ['Materials'],
        summary: 'Teacher uploads a PDF class material (source for future AI quizzes)',
        requestBody: {
          required: true,
          content: {
            'multipart/form-data': {
              schema: {
                type: 'object',
                required: ['classId', 'title', 'uploadedById', 'file'],
                properties: {
                  classId: { type: 'string', example: 'cls-101' },
                  title: { type: 'string', example: 'Unit 3 Notes.pdf' },
                  summary: { type: 'string', example: 'Linear equations overview' },
                  uploadedById: {
                    type: 'string',
                    description: 'Teacher user id',
                    example: 'usr-teacher-1',
                  },
                  file: { type: 'string', format: 'binary', description: 'PDF only' },
                },
              },
            },
          },
        },
        responses: {
          201: { description: 'Material created — use fileUrl to download' },
          400: { description: 'Missing fields or non-PDF file' },
          403: { description: 'Not the class teacher' },
        },
      },
    },

    // ---- Assignments ----
    '/assignments': {
      get: {
        tags: ['Assignments'],
        summary: 'List assignments',
        parameters: [
          { name: 'classId', in: 'query', schema: { type: 'string' }, example: 'cls-101' },
        ],
        responses: { 200: { description: 'Array of assignments' } },
      },
    },
    '/assignments/{id}': {
      get: {
        tags: ['Assignments'],
        summary: 'Get assignment by id',
        parameters: [
          {
            name: 'id',
            in: 'path',
            required: true,
            schema: { type: 'string' },
            example: 'asgn-1',
          },
        ],
        responses: { 200: { description: 'Assignment' }, 404: { description: 'Not found' } },
      },
      patch: {
        tags: ['Assignments'],
        summary: 'Update assignment (status, score, etc.)',
        parameters: [
          {
            name: 'id',
            in: 'path',
            required: true,
            schema: { type: 'string' },
            example: 'asgn-1',
          },
        ],
        requestBody: {
          content: {
            'application/json': {
              schema: {
                type: 'object',
                properties: {
                  status: { type: 'string' },
                  score: { type: 'integer' },
                  submissionCount: { type: 'integer' },
                  title: { type: 'string' },
                  dueDate: { type: 'string' },
                  totalPoints: { type: 'integer' },
                },
              },
            },
          },
        },
        responses: { 200: { description: 'Updated assignment' } },
      },
    },
    '/assignmentQuizzes': {
      get: {
        tags: ['Assignments'],
        summary: 'List assignment quiz sets',
        parameters: [
          {
            name: 'assignmentId',
            in: 'query',
            schema: { type: 'string' },
            example: 'asgn-1',
          },
        ],
        responses: { 200: { description: 'Array of quiz sets' } },
      },
    },
    '/assignmentResults': {
      get: {
        tags: ['Assignments'],
        summary: 'Get assignment results (teacher view; filter by assignment/class/student)',
        parameters: [
          {
            name: 'assignmentId',
            in: 'query',
            schema: { type: 'string' },
            example: 'asgn-1',
          },
          {
            name: 'classId',
            in: 'query',
            schema: { type: 'string' },
            example: 'cls-101',
          },
          {
            name: 'studentId',
            in: 'query',
            schema: { type: 'string' },
            example: 'usr-student-1',
          },
        ],
        responses: { 200: { description: 'Array of per-student results' } },
      },
      post: {
        tags: ['Assignments'],
        summary: 'Student submits an assignment result',
        requestBody: {
          required: true,
          content: {
            'application/json': {
              schema: {
                type: 'object',
                required: ['assignmentId', 'studentId', 'score'],
                properties: {
                  assignmentId: { type: 'string', example: 'asgn-1' },
                  studentId: { type: 'string', example: 'usr-student-1' },
                  score: { type: 'integer', example: 85 },
                  answers: {
                    type: 'array',
                    items: { type: 'object' },
                    example: [{ questionId: 1, selected: 1 }],
                  },
                  status: { type: 'string', example: 'submitted' },
                },
              },
            },
          },
        },
        responses: {
          201: { description: 'Created' },
          200: { description: 'Updated existing submission' },
          403: { description: 'Not a student' },
        },
      },
    },

    // ---- Quizzes ----
    '/quizzes': {
      get: {
        tags: ['Quizzes'],
        summary: 'List practice quizzes',
        parameters: [
          { name: 'subject', in: 'query', schema: { type: 'string' }, example: 'Math' },
        ],
        responses: { 200: { description: 'Array of quizzes' } },
      },
    },
    '/quizzes/{id}': {
      get: {
        tags: ['Quizzes'],
        summary: 'Get quiz by id',
        parameters: [
          {
            name: 'id',
            in: 'path',
            required: true,
            schema: { type: 'string' },
            example: 'qz-1',
          },
        ],
        responses: { 200: { description: 'Quiz' }, 404: { description: 'Not found' } },
      },
    },
    '/quizQuestions': {
      get: {
        tags: ['Quizzes'],
        summary: 'Get question set for a quiz',
        parameters: [
          {
            name: 'quizId',
            in: 'query',
            schema: { type: 'string' },
            example: 'qz-1',
          },
        ],
        responses: { 200: { description: 'Array of question sets' } },
      },
    },
    '/stories': {
      get: {
        tags: ['Quizzes'],
        summary: 'List reading stories',
        responses: { 200: { description: 'Array of stories' } },
      },
    },
    '/dailyObjective': {
      get: {
        tags: ['Quizzes'],
        summary: 'Get daily objective',
        responses: { 200: { description: 'Daily objective object' } },
      },
      patch: {
        tags: ['Quizzes'],
        summary: 'Update daily objective',
        requestBody: {
          content: {
            'application/json': {
              schema: {
                type: 'object',
                properties: {
                  completedQuizzes: { type: 'integer' },
                  targetQuizzes: { type: 'integer' },
                  bonusUnlocked: { type: 'boolean' },
                },
              },
            },
          },
        },
        responses: { 200: { description: 'Updated objective' } },
      },
    },
    '/quizCompletions': {
      post: {
        tags: ['Quizzes'],
        summary: 'Record quiz completion (adds XP + bumps daily count)',
        requestBody: {
          required: true,
          content: {
            'application/json': {
              schema: {
                type: 'object',
                required: ['userId', 'xpEarned'],
                properties: {
                  userId: { type: 'string', example: 'usr-student-1' },
                  xpEarned: { type: 'integer', example: 50 },
                },
              },
            },
          },
        },
        responses: { 200: { description: 'Updated exp and completedQuizzes' } },
      },
    },

    // ---- Catalog ----
    '/codeLabProgress': {
      get: {
        tags: ['Catalog'],
        summary: 'Per-user code lab hub progress',
        parameters: [
          { name: 'userId', in: 'query', required: true, schema: { type: 'string' }, example: 'usr-student-1' },
        ],
        responses: { 200: { description: 'Hub progress with itemProgress map' } },
      },
      patch: {
        tags: ['Catalog'],
        summary: 'Save lesson/quiz completion for a user',
        requestBody: {
          required: true,
          content: {
            'application/json': {
              schema: {
                type: 'object',
                required: ['userId'],
                properties: {
                  userId: { type: 'string' },
                  moduleId: { type: 'string', example: 'python-fundamentals' },
                  itemId: { type: 'string', example: 'var-101' },
                  status: { type: 'string', example: 'completed' },
                  activeModuleId: { type: 'string' },
                },
              },
            },
          },
        },
        responses: { 200: { description: 'Updated hub progress' } },
      },
    },
    '/codeLabModuleProgress': {
      get: {
        tags: ['Catalog'],
        summary: 'Per-user progress for one module',
        parameters: [
          { name: 'userId', in: 'query', required: true, schema: { type: 'string' } },
          { name: 'moduleId', in: 'query', required: true, schema: { type: 'string' } },
        ],
        responses: { 200: { description: 'Module percent and itemProgress' } },
      },
    },
    '/code/execute': {
      post: {
        tags: ['Catalog'],
        summary: 'Run Python code in the lab terminal',
        requestBody: {
          required: true,
          content: {
            'application/json': {
              schema: {
                type: 'object',
                required: ['code'],
                properties: {
                  code: { type: 'string', example: 'print("Hello from AIDucate")' },
                  language: { type: 'string', example: 'python' },
                },
              },
            },
          },
        },
        responses: { 200: { description: 'stdout, stderr, success, exitCode' } },
      },
    },
    '/codeModules': {
      get: {
        tags: ['Catalog'],
        summary: 'Code modules catalog (with official content flags)',
        responses: { 200: { description: 'Array of modules' } },
      },
    },
    '/codeModules/{moduleId}': {
      get: {
        tags: ['Catalog'],
        summary: 'Full module curriculum (Python = official PSF-aligned content)',
        parameters: [
          {
            name: 'moduleId',
            in: 'path',
            required: true,
            schema: { type: 'string' },
            example: 'python-fundamentals',
          },
        ],
        responses: { 200: { description: 'sourceUrl, sourceLabel, module with chapters' } },
      },
    },
    '/growthJourney': {
      get: {
        tags: ['Catalog'],
        summary: 'Per-user growth journey chart',
        parameters: [
          { name: 'userId', in: 'query', required: true, schema: { type: 'string' } },
        ],
        responses: { 200: { description: 'weeklyGoal and days' } },
      },
    },
    '/wardrobeItems': {
      get: {
        tags: ['Catalog'],
        summary: 'Wardrobe / gear items',
        responses: { 200: { description: 'Array of items' } },
      },
    },
    '/aiVoices': {
      get: {
        tags: ['Catalog'],
        summary: 'AI voice options',
        responses: { 200: { description: 'Array of voices' } },
      },
    },

    // ---- AI ----
    '/generateQuiz': {
      post: {
        tags: ['AI'],
        summary: 'Generate ephemeral practice quiz (mock AI)',
        requestBody: {
          content: {
            'application/json': {
              schema: {
                type: 'object',
                properties: {
                  subject: { type: 'string', example: 'Math' },
                },
              },
            },
          },
        },
        responses: { 200: { description: 'Generated quiz metadata' } },
      },
    },
    '/askEducatorAssistant': {
      post: {
        tags: ['AI'],
        summary: 'Ask educator assistant about a class (mock AI)',
        requestBody: {
          required: true,
          content: {
            'application/json': {
              schema: {
                type: 'object',
                required: ['classId', 'message'],
                properties: {
                  classId: { type: 'string', example: 'cls-101' },
                  message: { type: 'string', example: 'How is the class doing?' },
                },
              },
            },
          },
        },
        responses: { 200: { description: 'AI reply' } },
      },
    },
  },
  components: {
    parameters: {
      UserId: {
        name: 'id',
        in: 'path',
        required: true,
        schema: { type: 'string' },
        example: 'usr-student-1',
      },
    },
    schemas: {
      RegisterBody: {
        type: 'object',
        required: ['fullName', 'username', 'password', 'role'],
        properties: {
          fullName: { type: 'string' },
          username: { type: 'string' },
          password: { type: 'string' },
          role: { type: 'string', enum: ['student', 'teacher'] },
          teacherCardId: {
            type: 'string',
            description: 'Required when role is teacher',
          },
        },
      },
    },
  },
};
