import dotenv from 'dotenv';
import app from './app.js';
import connectDB from './config/database.js';

dotenv.config();

const port = process.env.PORT || 3333;

connectDB();

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
