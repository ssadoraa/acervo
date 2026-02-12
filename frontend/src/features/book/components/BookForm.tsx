import { Button, Col, Form, Row } from "react-bootstrap";
import { BookFormData } from "../types/BookFormData";
import { FormEvent } from "react";

interface BookFormProps {
    onSubmit: (book: BookFormData) => void;
}

export default function BookForm({ onSubmit }: BookFormProps) {

    function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();

        const formData = new FormData(event.currentTarget);
        const data: BookFormData = {
            title: formData.get("title") as string,
            author: formData.get("author") as string,
            publisher: formData.get("publisher") as string,
            isbn: formData.get("isbn") as string,
            category: formData.get("category") as string,
            publicationYear: Number(formData.get("publicationYear")),
            totalQuantity: Number(formData.get("totalQuantity")),
        };

        onSubmit(data);
    }

    return (
        <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="title">
                <Form.Label>Título</Form.Label>
                <Form.Control name="title" type="text" required placeholder="Informe o título do livro" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="author">
                <Form.Label>Autor</Form.Label>
                <Form.Control name="author" type="text" required placeholder="Informe o nome do autor" />
            </Form.Group>
            
            <Form.Group className="mb-3" controlId="publisher">
                <Form.Label>Editora</Form.Label>
                <Form.Control name="publisher" type="text" required placeholder="Informe a editora do livro" />
            </Form.Group>

            <Row className="mb-3">
                <Form.Group as={Col} controlId="isbn">
                    <Form.Label>Código do Livro</Form.Label>
                    <Form.Control name="isbn" type="text" required placeholder="Informe o código do livro" />
                </Form.Group>

                <Form.Group as={Col} controlId="category">
                    <Form.Label>Categoria</Form.Label>
                    <Form.Select required defaultValue="" name="category" aria-label="Selecione a categoria do livro">
                        <option value="" disabled>Selecione a categoria do livro</option>
                        <option value="1">Categoria 1</option>
                        <option value="2">Categoria 2</option>
                        <option value="3">Categoria 3</option>
                    </Form.Select>
                </Form.Group>
            </Row>

            <Row className="mb-3">
                <Form.Group as={Col} controlId="publicationYear">
                    <Form.Label>Ano de Publicação</Form.Label>
                    <Form.Control name="publicationYear" type="number" required min={1000} max={new Date().getFullYear()} placeholder="Informe o ano de publicação do livro" />
                </Form.Group>
                
                <Form.Group as={Col} controlId="totalQuantity">
                    <Form.Label>Quantidade</Form.Label>
                    <Form.Control name="totalQuantity" type="number" required min={0} placeholder="Informe a quantidade de livros" />
                </Form.Group>
            </Row>

            <Row className="mt-5">
                <Col>
                    <Button variant="secondary" type="reset">Cancelar</Button>
                </Col>
                <Col className="text-end">
                    <Button variant="success" type="submit">Salvar</Button>
                </Col>
            </Row>
        </Form>
    );
}
