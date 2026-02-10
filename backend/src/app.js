import express from 'express';
import cors from 'cors';
import bookRouter from './routes/bookRouter';

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Log for request
app.use((req, res, next) => {
  console.log(`[REQ] ${req.method} ${req.url}`);
  next();
});

// Test route
app.get('/', (req, res) => {
  res.json({ message: 'Bem-vindo ao servidor!' });
});

// Routes
app.use('/books', bookRouter);

export default app;