import { Request, Response } from 'express';
import { createLoanService, deleteLoanService, getAllLoansService, getLoanByIdService, updateLoanService } from '../services/loanService';

// Controller function to get all loans
export const getAllLoans = async (_req: Request, res: Response) => {
    try {
        const loans =  await getAllLoansService();
        return res.status(200).json(loans);
    } catch (error: any) {
        res.status(500).json({ message: "Error fetching loans", error: error.message });
    }

};

// Controller function to get a loan by ID
export const getLoanById = async (req: Request, res: Response) => {
    try {
        const loan =  await getLoanByIdService(req.params.id as string);

        if (!loan) {
            return res.status(404).json({ message: "Loan not found" });
        }

        return res.status(200).json(loan);
    } catch (error: any) {
        res.status(500).json({ message: "Error fetching loan", error: error.message });
    }
};

// Controller function to create a new loan
export const createLoan = async (req: Request, res: Response) => {
    try {
        const loan =  await createLoanService(req.body);
        return res.status(201).json(loan);
    } catch (error: any) {
        res.status(400).json({ message: "Error creating loan", error: error.message });
    }
};

// Controller function to update a loan by ID
export const updateLoan = async (req: Request, res: Response) => {
    try {
        const loan = await updateLoanService(req.params.id as string, req.body);

        if (!loan) {
            return res.status(404).json({ message: "Loan not found" });
        }

        return res.status(200).json(loan);
    } catch (error: any) {
        res.status(400).json({ message: "Error updating loan", error: error.message });
    }
};

// Controller function to delete a loan by ID
export const deleteLoan = async (req: Request, res: Response) => {
    try {
        const loan = await deleteLoanService(req.params.id as string);

        if (!loan) {
            return res.status(404).json({ message: "loan not found" });
        }

        return res.status(200).json({ message: "loan deleted successfully" });
    } catch (error: any) {
        res.status(500).json({ message: "Error deleting loan", error: error.message });
    }
};