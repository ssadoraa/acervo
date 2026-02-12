import { Alert, Container, Spinner } from "react-bootstrap";
import BookForm from "../components/BookForm";
import { BookFormData } from "../types/BookFormData";
import { useBook } from "../hooks/useBook";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

export default function EditBook() {
	const { id } = useParams<{ id: string }>();
	const { editBook, getBookById, loading, error } = useBook();
	const [book, setBook] = useState<BookFormData | null>(null);
	const [loadingBook, setLoadingBook] = useState(true);

	useEffect(() => {
		if (!id) return;

		async function loadBook() {
			setLoadingBook(true);
			try {
				const response = await getBookById(id!);
				if (response?.data) {
					const { id: _, ...bookData } = response.data;
					setBook(bookData);
				}
			} catch (err) {
				console.log(err);
			} finally {
				setLoadingBook(false);
			}
		}

		loadBook();
	}, [id, getBookById]);


	async function handleSubmit(formData: BookFormData) {
		if (!id) return;

		await editBook(id, formData);
		alert("Livro atualizado!");
	}

	if (loadingBook) return <Container className="text-center mt-5"><Spinner animation="border" /></Container>;
	if (!book) return <Container className="mt-5"><Alert variant="warning">Livro não encontrado.</Alert></Container>;

	return (
	<Container>
		<h1 className="mb-4 mt-4">Editar Livro</h1>
		{error && <Alert variant="danger">{error}</Alert>}
		<BookForm onSubmit={handleSubmit} loading={loading} initialData={book} />
	</Container>
	);
}