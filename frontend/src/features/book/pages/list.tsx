import { Alert, Container } from "react-bootstrap";
import { useBook } from "../hooks/useBook";
import { useState, useEffect } from "react";
import BookTable from "../components/BookTable";
import { Book } from "../types/Book";

export default function ListBooks() {
	const { getAllBooks, loading, error } = useBook();
	const [books, setBooks] = useState<Book[]>([]);

	useEffect(() => {
		async function fetchBooks() {
			const data = await getAllBooks();
			if (data?.data) setBooks(data.data);
		}
		fetchBooks();
	}, [getAllBooks]);

	return (
		<Container>
			<h1 className="mb-4 mt-4">Listagem dos Livros</h1>
			{error && <Alert variant="danger">{error}</Alert>}
			<BookTable data={books} loading={loading} />
		</Container>
	);
}