import { Container } from "react-bootstrap";
import BookForm from "../components/BookForm";
import { BookFormData } from "../types/BookFormData";

export default function CreateBook() {
    function handleSubmit(book: BookFormData) {
        console.log("Dados do formulário: ", book)
    };

    return (
        <Container>
            <h1 className="mb-4 mt-4">Cadastre um Livro</h1>
            <BookForm onSubmit={handleSubmit}/>
        </Container>
    )
}