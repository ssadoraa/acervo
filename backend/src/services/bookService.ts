import { Book } from '../models/Book';

export const getAllBooksService = async () => {
    return await Book.find();
};

export const getBookByIdService = async (id: string) => {
    return await Book.findById(id);
};

export const createBookService = async (book: any) => {
    return await Book.create(book);
};

export const updateBookService = async (id: string, book: any) => {
    return await Book.findByIdAndUpdate(id, book, { new: true });
};

export const deleteBookService = async (id: string) => {
    return await Book.findByIdAndDelete(id);
};