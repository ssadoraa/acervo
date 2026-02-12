import { Button, Col, Form, Row, Spinner } from "react-bootstrap";
import { BookFormData } from "../types/BookFormData";
import { useEffect, useState } from "react";

interface BookFormProps {
    onSubmit: (book: BookFormData) => void;
    initialData?: BookFormData;
    loading: boolean;
}

export default function BookForm({ onSubmit, loading, initialData }: BookFormProps) {
    const [form, setForm] = useState<BookFormData>({
        title: "",
        author: "",
        publisher: "",
        isbn: "",
        category: "",
        publicationYear: new Date().getFullYear(),
        totalQuantity: 1,
    });

    // Updates the form when initialData changes (EditBook)
    useEffect(() => {
        if (initialData) {
            setForm(initialData);
        }
    }, [initialData]);


    function handleChange(event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) {
        const { name, value } = event.target;

        setForm((prev) => ({
            ...prev,
            [name]: name === "publicationYear" || name === "totalQuantity"
                    ? Number(value) : value,
        }));
    }

    function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        onSubmit(form);
    }

    function handleReset() {
        setForm(initialData ?? {
            title: "",
            author: "",
            publisher: "",
            isbn: "",
            category: "",
            publicationYear: new Date().getFullYear(),
            totalQuantity: 1,
        });
    }

    return (
        <Form onSubmit={handleSubmit}>
            <fieldset disabled={loading}>
                <Form.Group className="mb-3" controlId="title">
                    <Form.Label>Título</Form.Label>
                    <Form.Control name="title" type="text" value={form.title} onChange={handleChange} required
                        placeholder="Informe o título do livro"
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="author">
                    <Form.Label>Autor</Form.Label>
                    <Form.Control name="author" type="text" value={form.author} onChange={handleChange} required
                        placeholder="Informe o nome do autor"
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="publisher">
                    <Form.Label>Editora</Form.Label>
                    <Form.Control name="publisher" type="text" value={form.publisher} onChange={handleChange} required
                        placeholder="Informe a editora do livro"
                    />
                </Form.Group>

                <Row className="mb-3">
                    <Form.Group as={Col} controlId="isbn">
                        <Form.Label>Código do Livro</Form.Label>
                        <Form.Control name="isbn" type="text"  value={form.isbn} onChange={handleChange} required
                            placeholder="Informe o código do livro"
                        />
                    </Form.Group>

                    <Form.Group as={Col} controlId="category">
                        <Form.Label>Categoria</Form.Label>
                        <Form.Select name="category"  value={form.category} onChange={handleChange} required>
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
                        <Form.Control name="publicationYear" type="number" value={form.publicationYear} onChange={handleChange} required
                            min={1000} max={new Date().getFullYear()} placeholder="Informe o ano de publicação do livro"
                        />
                    </Form.Group>

                    <Form.Group as={Col} controlId="totalQuantity">
                        <Form.Label>Quantidade</Form.Label>
                        <Form.Control name="totalQuantity" type="number" value={form.totalQuantity} onChange={handleChange} required
                            min={0} placeholder="Informe a quantidade de livros"
                        />
                    </Form.Group>
                </Row>

                <Row className="mt-5">
                    <Col>
                        <Button variant="secondary" type="button" onClick={handleReset}>Cancelar</Button>
                    </Col>
                    <Col className="text-end">
                        <Button variant="success" type="submit" disabled={loading}>
                            {loading ? (
                                <>
                                    <Spinner as="span" animation="border" size="sm" role="status" className="me-2"/>
                                    Salvando...
                                </>
                            ) : (
                                "Salvar"
                            )}
                        </Button>
                    </Col>
                </Row>
            </fieldset>
        </Form>
    );
}