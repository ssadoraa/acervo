import { Router } from 'express';
import { getAllLoans, getLoanById, createLoan, updateLoan, deleteLoan } from '../controllers/loanController';

const loanRouter = Router();

// Define routes for Loan operations
loanRouter.get('/', getAllLoans);
loanRouter.get('/:id', getLoanById);
loanRouter.post('/', createLoan);
loanRouter.put('/:id', updateLoan);
loanRouter.delete('/:id', deleteLoan);

export default loanRouter;