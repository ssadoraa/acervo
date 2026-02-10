import { Book } from '../models/Book';

export const getAllBooks = async () => {
    return await Book.find();
};

export const getBookById = async (id: number) => {
    return await Book.findById(id);
};

export const createBook = async (book: any) => {
    return await Book.create(book);
};

export const updateBook = async (id: number, book: any) => {
    return await Book.findByIdAndUpdate(id, book, { new: true });
};

export const deleteBook = async (id: number) => {
    return await Book.findByIdAndDelete(id);
};