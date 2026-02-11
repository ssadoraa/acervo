import { Request, Response } from 'express';
import { createBookService, deleteBookService, getAllBooksService, getBookByIdService, updateBookService } from '../services/bookService';

// Controller function to get all books
export const getAllBooks = async (_req: Request, res: Response) => {
    try {
        const books =  await getAllBooksService();
        return res.status(200).json(books);
    } catch (error: any) {
        res.status(500).json({ message: "Error fetching books", error: error.message });
    }

};

// Controller function to get a book by ID
export const getBookById = async (req: Request, res: Response) => {
    try {
        const id = Number(req.params.id);
        const book =  await getBookByIdService(id);

        if (!book) {
            return res.status(404).json({ message: "Book not found" });
        }

        return res.status(200).json(book);
    } catch (error: any) {
        res.status(500).json({ message: "Error fetching book", error: error.message });
    }
};

// Controller function to create a new book
export const createBook = async (req: Request, res: Response) => {
    try {
        const book =  await createBookService(req.body);
        return res.status(201).json(book);
    } catch (error: any) {
        res.status(400).json({ message: "Error creating book", error: error.message });
    }
};

// Controller function to update a book by ID
export const updateBook = async (req: Request, res: Response) => {
    try {
        const id = Number(req.params.id);
        const book = await updateBookService(id, req.body);

        if (!book) {
            return res.status(404).json({ message: "Book not found" });
        }

        return res.status(200).json(book);
    } catch (error: any) {
        res.status(400).json({ message: "Error updating book", error: error.message });
    }
};

// Controller function to delete a book by ID
export const deleteBook = async (req: Request, res: Response) => {
    try {
        const id = Number(req.params.id);
        const book = await deleteBookService(id);

        if (!book) {
            return res.status(404).json({ message: "Book not found" });
        }

        return res.status(200).json({ message: "Book deleted successfully" });
    } catch (error: any) {
        res.status(500).json({ message: "Error deleting book", error: error.message });
    }
};