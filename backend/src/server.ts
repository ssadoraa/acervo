import dotenv from 'dotenv';
import app from './app';
import connectDB from './configs/database';

dotenv.config();

const port = process.env.PORT || 3333;

// Connect to the database
connectDB();

// Start the server
app.listen(port, () => {
  console.log(`\n--> Servidor rodando na porta ${port}\n`);
});
