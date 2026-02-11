import { Book } from '../models/Book';

export const getAllBooksService = async () => {
    return await Book.find();
};

export const getBookByIdService = async (id: number) => {
    return await Book.findById(id);
};

export const createBookService = async (book: any) => {
    return await Book.create(book);
};

export const updateBookService = async (id: number, book: any) => {
    return await Book.findByIdAndUpdate(id, book, { new: true });
};

export const deleteBookService = async (id: number) => {
    return await Book.findByIdAndDelete(id);
};