export interface Book {
    id: string;
    title: string;
    author: string;
    publisher: string;
    isbn: string;
    category: string;
    publicationYear: number;
    active: boolean;
    totalQuantity: number;
}

// Create a new book type excluding the ID
export type BookFormData = Omit<Book, "id">;