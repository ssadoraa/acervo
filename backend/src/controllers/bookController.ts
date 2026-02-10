import { Request, Response } from 'express';
import { Book } from '../models/Book';
import { createBook, deleteBook, getAllBooks, getBookById, updateBook } from '../services/bookService';

// Controller function to get all books
export const getAll = async (_req: Request, res: Response) => {
    try {
        const books =  await getAllBooks();
        return res.status(200).json(books);
    } catch (error: any) {
        res.status(500).json({ message: "Error fetching books", error: error.message });
    }

};

// Controller function to get a book by ID
export const getById = async (req: Request, res: Response) => {
    try {
        const book =  await getBookById(req.params.id);

        if (!book) {
            return res.status(404).json({ message: "Book not found" });
        }

        return res.status(200).json(book);
    } catch (error: any) {
        res.status(500).json({ message: "Error fetching book", error: error.message });
    }
};

// Controller function to create a new book
export const create = async (req: Request, res: Response) => {
    try {
        const book =  await createBook(req.body);
        return res.status(201).json(book);
    } catch (error: any) {
        res.status(400).json({ message: "Error creating book", error: error.message });
    }
};

// Controller function to update a book by ID
export const update = async (req: Request, res: Response) => {
    try {
        const book = await updateBook(req.params.id, req.body);

        if (!book) {
            return res.status(404).json({ message: "Book not found" });
        }

        return res.status(200).json(book);
    } catch (error: any) {
        res.status(400).json({ message: "Error updating book", error: error.message });
    }
};

// Controller function to delete a book by ID
export const deleteById = async (req: Request, res: Response) => {
    try {
        const book = await deleteBook(req.params.id);

        if (!book) {
            return res.status(404).json({ message: "Book not found" });
        }

        return res.status(200).json({ message: "Book deleted successfully" });
    } catch (error: any) {
        res.status(500).json({ message: "Error deleting book", error: error.message });
    }
};