import { api } from "../../../shared/service/api";
import { BookFormData } from "../types/BookFormData";

export function create(book: BookFormData) {
    return api.post("/books", book);
}

export function edit(book: BookFormData & { id: string }) {
    return api.put(`/books/${book.id}`, book);
}

export function getBook(id: string) {
    return api.get(`/books/${id}`);
}