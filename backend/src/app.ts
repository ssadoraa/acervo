import express from 'express';
import cors from 'cors';
import bookRouter from './routes/bookRouter';
import categoryRouter from './routes/categoryRouter';

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Log for request
app.use((req, res, next) => {
  console.log(`[REQ] ${req.method} ${req.url}`);
  next();
});

// Routes
app.use('/books', bookRouter);
app.use('/categories', categoryRouter)

export default app;