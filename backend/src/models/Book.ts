import { Schema, model, Document } from "mongoose";
import { Category } from "../enums/Category";

interface IBook extends Document {
    title: string;
    author: string;
    isbn: string;
    category: Category;
    publisher: string;
    publicationYear: number;
    totalQuantity: number;
    active: boolean;
    insertAt?: Date;
}

const bookSchema = new Schema<IBook>(
  {
    title: { type: String, required: true },
    author: { type: String, required: true },
    isbn: { type: String, required: true },
    category: { type: String, enum: Object.values(Category), required: true },
    publisher: { type: String, required: true },
    publicationYear: { type: Number, required: true },
    active: { type: Boolean, required: true },
    totalQuantity: { type: Number, required: true }
  },
  { timestamps: { createdAt: "insertAt" } }
);

export const Book = model<IBook>("Book", bookSchema);