import { Alert, Container } from "react-bootstrap";
import { Book } from "../types/Book";
import { useBook } from "../hooks/useBook";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import BookView from "../components/BookView";

export default function GetBook() {
    const { id } = useParams<{ id: string }>();
    const { getBookById, activateDeactivateBook, loading, error } = useBook();
	const [book, setBook] = useState<Book | null>(null);

	useEffect(() => {
		async function fetchBooks() {
			try {
				const data = await getBookById(id!);
				if (data?.data) setBook(data.data);
			} catch (err) {
				console.error(err);
			}
		}
		fetchBooks();
	}, [getBookById, id]);

	return (
		<Container>
			<h1 className="mb-4 mt-4">Detalhes do Livro</h1>
			{error && <Alert variant="danger">{error}</Alert>}
			<BookView data={book} loading={loading} onToggleActivate={activateDeactivateBook}/>
		</Container>
	);
}