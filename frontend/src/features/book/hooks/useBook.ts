import { useState } from "react";
import { BookFormData } from "../types/BookFormData";
import * as bookService from "../services/bookService";

export function useBook() {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    async function createBook(data: BookFormData) {
        try {
            setLoading(true);
            setError(null);

            await bookService.create(data);
        } catch (err) {
            setError("Erro ao cadastrar livro");
        } finally {
            setLoading(false);
        }
    }

    return { createBook, loading, error };
}