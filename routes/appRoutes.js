import express from 'express';
import { listUsers, getUserById, patchUser, enrollUserInClass } from '../controllers/usersController.js';
import { listClasses, getClassById, listClassMaterials } from '../controllers/classesController.js';
import {
  listAssignments,
  getAssignmentById,
  patchAssignment,
  listAssignmentQuizzes,
} from '../controllers/assignmentsController.js';
import {
  listQuizzes,
  getQuizById,
  listQuizQuestions,
  listStories,
  getDailyObjective,
  patchDailyObjective,
  recordQuizCompletion,
} from '../controllers/quizzesController.js';
import {
  getCodeLabProgress,
  getCodeModules,
  getGrowthJourney,
  getWardrobeItems,
  getAiVoices,
} from '../controllers/catalogController.js';
import { generateQuizForSubject, askEducatorAssistant } from '../controllers/aiController.js';

const router = express.Router();

router.get('/users', listUsers);
router.get('/users/:id', getUserById);
router.patch('/users/:id', patchUser);
router.post('/enrollments', enrollUserInClass);

router.get('/classes', listClasses);
router.get('/classes/:id', getClassById);
router.get('/classMaterials', listClassMaterials);

router.get('/assignments', listAssignments);
router.get('/assignments/:id', getAssignmentById);
router.patch('/assignments/:id', patchAssignment);
router.get('/assignmentQuizzes', listAssignmentQuizzes);

router.get('/quizzes', listQuizzes);
router.get('/quizzes/:id', getQuizById);
router.get('/quizQuestions', listQuizQuestions);
router.get('/stories', listStories);
router.get('/dailyObjective', getDailyObjective);
router.patch('/dailyObjective', patchDailyObjective);
router.post('/quizCompletions', recordQuizCompletion);

router.get('/codeLabProgress', getCodeLabProgress);
router.get('/codeModules', getCodeModules);
router.get('/growthJourney', getGrowthJourney);
router.get('/wardrobeItems', getWardrobeItems);
router.get('/aiVoices', getAiVoices);

router.post('/generateQuiz', generateQuizForSubject);
router.post('/askEducatorAssistant', askEducatorAssistant);

export default router;
