import { Router } from 'express';
import { getAllBooks, getBookById, createBook, updateBook, deleteBook, toggleActiveBook } from '../controllers/bookController';

const bookRouter = Router();

// Define routes for book operations
bookRouter.get('/', getAllBooks);
bookRouter.get('/:id', getBookById);
bookRouter.post('/', createBook);
bookRouter.put('/:id', updateBook);
bookRouter.delete('/:id', deleteBook);
bookRouter.patch('/:id/toggle', toggleActiveBook);

export default bookRouter;