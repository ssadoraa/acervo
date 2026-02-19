import { Button, Col, Form, Row, Spinner } from "react-bootstrap";
import { BookFormData } from "../types/Book";
import { useEffect, useState } from "react";
import { useCategories } from "../hooks/useCategories";

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

    const { categories, loading: loadingCategories } = useCategories();

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
                        <Form.Select name="category" value={form.category} onChange={handleChange} >
                            <option value="" disabled>{loadingCategories ? "Carregando..." : "Selecione a categoria do livro"}</option>
                            {!loadingCategories && categories.map((cat) => <option key={cat} value={cat}>{cat}</option>)}
                        </Form.Select>
                    </Form.Group>
                </Row>

                <Row className="mb-3">
                    <Form.Group as={Col} controlId="publicationYear">
                        <Form.Label>Ano de Publicação</Form.Label>
                        <Form.Control as="select" name="publicationYear" value={form.publicationYear} onChange={handleChange} required>
                            {Array.from({ length: new Date().getFullYear() - 1000 + 1 }, (_, i) => new Date().getFullYear() - i).map(year => (
                                <option key={year} value={year}>{year}</option>
                            ))}
                        </Form.Control>
                    </Form.Group>

                    <Form.Group as={Col} controlId="totalQuantity">
                        <Form.Label>Quantidade</Form.Label>
                        <Form.Control name="totalQuantity" type="number" value={form.totalQuantity} onChange={handleChange} required
                            min={1} placeholder="Informe a quantidade de livros"
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