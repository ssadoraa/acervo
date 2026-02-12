import { useState } from "react";
import { BookFormData } from "../types/BookFormData";
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

	async function createBook(data: BookFormData) {
		return await handleRequest(() => bookService.create(data), "Erro ao cadastrar livro");
	}

	async function editBook(id: string, data: BookFormData) {
		return await handleRequest(() => bookService.edit({ ...data, id }), "Erro ao editar livro");
	}

	async function getBookById(id: string) {
		return await handleRequest(() => bookService.getBook(id), "Erro ao recuperar livro pelo id.");
	}

	return { createBook, editBook, getBookById, loading, error };
}