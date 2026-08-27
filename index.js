import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import swaggerUi from 'swagger-ui-express';
import authRoutes from './routes/authRoutes.js';
import appRoutes from './routes/appRoutes.js';
import { openApiSpec } from './docs/openapi.js';
import { uploadsRoot } from './middleware/uploadMiddleware.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(
  cors({
    origin: process.env.FRONTEND_URL || 'http://localhost:3000',
    credentials: true,
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use('/uploads', express.static(uploadsRoot));

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(openApiSpec, { explorer: true }));
app.get('/openapi.json', (_req, res) => res.json(openApiSpec));

app.use('/api', authRoutes);
app.use('/', appRoutes);

app.get('/health', (_req, res) => {
  res.json({ message: 'AIDucate API is running smoothly!' });
});

app.listen(Number(PORT), (err) => {
  if (err) {
    console.error('Server failed to start:', err.message || err);
    process.exit(1);
  }
  console.log(`Server listening on http://localhost:${PORT}`);
  console.log(`Swagger docs at http://localhost:${PORT}/api-docs`);
});
