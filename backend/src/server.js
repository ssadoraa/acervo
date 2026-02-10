import dotenv from 'dotenv';
import app from './app.js';
import connectDB from './configs/database.js';

dotenv.config();

const port = process.env.PORT || 3333;

// Connect to the database
connectDB();

// Start the server
app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
