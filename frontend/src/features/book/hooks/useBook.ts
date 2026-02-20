import { useState } from "react";
import { BookFormData } from "../types/Book";
import * as bookService from "../services/bookService";

export function useBook() {
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState<string | null>(null);

	async function handleRequest<T>(request: () => Promise<T>, errorMessage: string): Promise<T | undefined> {
		try {
			setLoading(true);
			setError(null);
			return await request();
		} catch (err) {
			setError(errorMessage);
			console.error(err);
			return undefined;
		} finally {
			setLoading(false);
		}
	}

	// Function for search all books
	async function getAllBooks() {
		return await handleRequest(() => bookService.getAll(), "Erro ao recuperar listagem de livros.");
	}

	// Function for search book
	async function getBookById(id: string) {
		return await handleRequest(() => bookService.get(id), "Erro ao recuperar livro pelo id.");
	}
	
	// Function for create book
	async function createBook(data: BookFormData) {
		return await handleRequest(() => bookService.create(data), "Erro ao cadastrar livro");
	}

	// Function for edit book
	async function editBook(id: string, data: BookFormData) {
		return await handleRequest(() => bookService.edit({ ...data, id }), "Erro ao editar livro");
	}

	// Function for delete book
	async function deleteBook(id: string) {
		return await handleRequest(() => bookService.deleteB(id), "Erro ao deletar livro")
	}

	async function activateDeactivateBook(id: string) {
		return await handleRequest(() => bookService.activateDeactivate(id), "Erro ao ativar/desativar livro")
	}

	return { createBook, editBook, getBookById, deleteBook, getAllBooks, activateDeactivateBook, loading, error };
}