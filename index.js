// index.js
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import authRoutes from './routes/authRoutes.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Enable CORS for frontend requests
app.use(
  cors({
    origin: process.env.FRONTEND_URL || 'http://localhost:3000',
    credentials: true,
  })
);

app.use(express.json());

// Routes
app.use('/api', authRoutes);

// Root route
app.get('/', (req, res) => {
  res.json({ message: 'AIDucate API is running smoothly!' });
});

app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`);
});