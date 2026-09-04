import express from 'express';
import {
  listUsers,
  getUserById,
  patchUser,
  deleteUser,
} from '../controllers/usersController.js';
import {
  listClasses,
  getClassById,
  createClass,
  joinClassByCode,
  leaveClass,
  listClassMaterials,
  createClassMaterial,
  deleteClassMaterial,
} from '../controllers/classesController.js';
import {
  listAssignments,
  getAssignmentById,
  patchAssignment,
  postAssignment,
  listAssignmentQuizzes,
  postAssignmentResult,
  listAssignmentResults,
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
  patchCodeLabProgress,
  getModuleProgress,
  getGrowthJourney,
  getCodeModules,
  getCodeModuleById,
  executeCode,
} from '../controllers/codeLabController.js';
import {
  getWardrobeItems,
  getAiVoices,
} from '../controllers/catalogController.js';
import { generateQuizForSubject, askEducatorAssistant, generateAssignmentQuestions, generatePracticeQuiz } from '../controllers/aiController.js';
import { askCodeLabMentor, getAiStatus } from '../controllers/mentorController.js';
import { uploadMaterialPdf } from '../middleware/uploadMiddleware.js';

const router = express.Router();

router.get('/users', listUsers);
router.get('/users/:id', getUserById);
router.patch('/users/:id', patchUser);
router.delete('/users/:id', deleteUser);

router.get('/classes', listClasses);
router.post('/classes', createClass);
router.post('/classes/join', joinClassByCode);
router.post('/classes/leave', leaveClass);
router.get('/classes/:id', getClassById);

router.get('/classMaterials', listClassMaterials);
router.post('/classMaterials', (req, res, next) => {
  uploadMaterialPdf(req, res, (err) => {
    if (err) return res.status(400).json({ message: err.message });
    return createClassMaterial(req, res, next);
  });
});
router.delete('/classMaterials/:id', deleteClassMaterial);

router.get('/assignments', listAssignments);
router.post('/assignments', postAssignment);
router.get('/assignments/:id', getAssignmentById);
router.patch('/assignments/:id', patchAssignment);
router.get('/assignmentQuizzes', listAssignmentQuizzes);
router.get('/assignmentResults', listAssignmentResults);
router.post('/assignmentResults', postAssignmentResult);

router.get('/quizzes', listQuizzes);
router.get('/quizzes/:id', getQuizById);
router.get('/quizQuestions', listQuizQuestions);
router.get('/stories', listStories);
router.get('/dailyObjective', getDailyObjective);
router.patch('/dailyObjective', patchDailyObjective);
router.post('/quizCompletions', recordQuizCompletion);

router.get('/codeLabProgress', getCodeLabProgress);
router.patch('/codeLabProgress', patchCodeLabProgress);
router.get('/codeLabModuleProgress', getModuleProgress);
router.get('/codeModules', getCodeModules);
router.get('/codeModules/:moduleId', getCodeModuleById);
router.get('/growthJourney', getGrowthJourney);
router.post('/code/execute', executeCode);
router.get('/wardrobeItems', getWardrobeItems);
router.get('/aiVoices', getAiVoices);

router.post('/generateQuiz', generateQuizForSubject);
router.post('/generateQuestions', generateAssignmentQuestions);
router.post('/practiceQuiz', generatePracticeQuiz);
router.post('/askEducatorAssistant', askEducatorAssistant);
router.post('/codeLabMentor', askCodeLabMentor);
router.get('/ai/status', getAiStatus);

export default router;
