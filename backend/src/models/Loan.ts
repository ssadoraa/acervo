import { Schema, model, Document } from "mongoose";
import { Category } from "../enums/Category";

interface ILoan extends Document {
	userId: string;
	bookId: string;
	insertAt?: Date;
	returnDate: Date;
}

const loanSchema = new Schema<ILoan>(
	{
		userId: { type: String, required: true },
		bookId: { type: String, required: true },
		returnDate: { type: Date, required: true }
	},
	{ timestamps: { createdAt: "insertAt" } }
);

export const Loan = model<ILoan>("Loan", loanSchema);