import { Alert, Container } from "react-bootstrap";
import BookForm from "../components/BookForm";
import { BookFormData } from "../types/Book";
import { useBook } from "../hooks/useBook";

export default function CreateBook() {
	const { createBook, loading, error } = useBook();

	async function handleSubmit(book: BookFormData) {
		const result = await createBook(book);
		if (result?.data) alert("Livro criado");
	}

	return (
	<Container>
		<h1 className="mb-4 mt-4">Cadastrar Livro</h1>
		{error && <Alert variant="danger">{error}</Alert>}
		<BookForm onSubmit={handleSubmit} loading={loading} />
	</Container>
	);
}