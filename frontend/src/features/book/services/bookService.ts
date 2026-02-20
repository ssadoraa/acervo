import { api } from "../../../shared/service/api";
import { BookFormData } from "../types/Book";

export function getAll() {
    return api.get(`/books`);
}

export function get(id: string) {
    return api.get(`/books/${id}`);
}

export function create(book: BookFormData) {
    return api.post("/books", book);
}

export function edit(book: BookFormData & { id: string }) {
    return api.put(`/books/${book.id}`, book);
}

export function deleteB(id: string) {
    return api.delete(`/books/${id}`);
}

export function activateDeactivate(id: string) {
    return api.patch(`/book/${id}/toggle`)}