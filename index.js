import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';
import cookieParser from 'cookie-parser';
import swaggerUi from 'swagger-ui-express';
import authRoutes from './routes/authRoutes.js';
import appRoutes from './routes/appRoutes.js';
import { openApiSpec } from './docs/openapi.js';
import { uploadsRoot } from './middleware/uploadMiddleware.js';
import { getAiProviderInfo } from './services/aiService.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
dotenv.config({ path: path.join(__dirname, '.env') });

const app = express();
const PORT = process.env.PORT || 5000;

const allowedOrigins = (process.env.FRONTEND_URL || 'http://localhost:3000')
  .split(',')
  .map((origin) => origin.trim())
  .filter(Boolean);

app.use(
  cors({
    origin(origin, callback) {
      if (!origin) return callback(null, true);
      if (allowedOrigins.includes(origin) || origin.endsWith('.vercel.app')) {
        return callback(null, true);
      }
      return callback(new Error(`CORS blocked for origin: ${origin}`));
    },
    credentials: true,
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use('/uploads', express.static(uploadsRoot));

app.get('/', (_req, res) => {
  res.type('html').send(`<!doctype html>
<html>
  <head><meta charset="utf-8"><title>AIDucate API</title></head>
  <body style="font-family: sans-serif; max-width: 40rem; margin: 3rem auto; line-height: 1.5;">
    <h1>AIDucate API is running</h1>
    <p>This URL is the backend, not the student/teacher website.</p>
    <ul>
      <li><a href="/health">/health</a> — status check</li>
      <li><a href="/api-docs">/api-docs</a> — API docs</li>
    </ul>
  </body>
</html>`);
});

app.get('/health', (_req, res) => {
  res.json({ message: 'AIDucate API is running smoothly!' });
});

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(openApiSpec, { explorer: true }));
app.get('/openapi.json', (_req, res) => res.json(openApiSpec));

app.use('/api', authRoutes);
app.use('/', appRoutes);

app.listen(Number(PORT), (err) => {
  if (err) {
    console.error('Server failed to start:', err.message || err);
    process.exit(1);
  }
  console.log(`Server listening on http://localhost:${PORT}`);
  console.log(`Swagger docs at http://localhost:${PORT}/api-docs`);
  const ai = getAiProviderInfo();
  console.log(
    ai.enabled
      ? `AI enabled via ${ai.provider} (model: ${ai.model})`
      : 'AI disabled — add OPENROUTER_API_KEY or OPENAI_API_KEY to .env'
  );
});
