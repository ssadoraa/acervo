import { Loan } from '../models/Loan';

export const getAllLoansService = async () => {
    return await Loan.find();
};

export const getLoanByIdService = async (id: string) => {
    return await Loan.findById(id);
};

export const createLoanService = async (loan: any) => {
    return await Loan.create(loan);
};

export const updateLoanService = async (id: string, loan: any) => {
    return await Loan.findByIdAndUpdate(id, loan, { new: true });
};

export const deleteLoanService = async (id: string) => {
    return await Loan.findByIdAndDelete(id);
};