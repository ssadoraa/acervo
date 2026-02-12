import { api } from "../../../shared/service/api";
import { BookFormData } from "../types/BookFormData";

export function create(book: BookFormData) {
    return api.post("/books", book);
}