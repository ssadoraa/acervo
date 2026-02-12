import { Alert, Container } from "react-bootstrap";
import BookForm from "../components/BookForm";
import { BookFormData } from "../types/BookFormData";
import { useBook } from "../hooks/useBook";

export default function CreateBook() {
    const { createBook, loading, error } = useBook();

    async function handleSubmit(book: BookFormData) {
            await createBook(book);
    };

    return (
        <Container>
            <h1 className="mb-4 mt-4">Cadastre um Livro</h1>
            {error && <Alert variant="danger">{error}</Alert>}
            <BookForm onSubmit={handleSubmit} loading={loading}/>
        </Container>
    );
}