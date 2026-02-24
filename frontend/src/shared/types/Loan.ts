export interface Loan {
    _id: string;
	userId: string;
	bookId: string;
	returnDate: Date;
}

// Create a new loan type excluding the ID
export type LoanFormData = Omit<Loan, "_id">;