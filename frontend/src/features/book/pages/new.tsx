import { Container } from "react-bootstrap";
import BookForm from "../components/BookForm";

export default function CreateBook() {
    return (
        <Container>
            <h1 className="mb-4 mt-4">Cadastre um Livro</h1>
            <BookForm />
        </Container>
    )
}