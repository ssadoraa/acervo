import { Button, Col, Form, Row } from "react-bootstrap";

export default function BookForm() {
    return (
        <Form onSubmit={(e) => e.preventDefault()}>
            <Form.Group className="mb-3" controlId="title">
                <Form.Label>Título</Form.Label>
                <Form.Control type="text" required placeholder="Informe o título do livro" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="author">
                <Form.Label>Autor</Form.Label>
                <Form.Control type="text" required placeholder="Informe o nome do autor" />
            </Form.Group>
            
            <Form.Group className="mb-3" controlId="publisher">
                <Form.Label>Editora</Form.Label>
                <Form.Control type="text" required placeholder="Informe a editora do livro" />
            </Form.Group>

            <Row className="mb-3">
                <Form.Group as={Col} controlId="isbn">
                    <Form.Label>Código do Livro</Form.Label>
                    <Form.Control type="text" required placeholder="Informe o código do livro" />
                </Form.Group>

                <Form.Group as={Col} controlId="category">
                    <Form.Label>Categoria</Form.Label>
                    <Form.Select required defaultValue="" aria-label="Selecione a categoria do livro">
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
                    <Form.Control type="number" required min={1000} max={new Date().getFullYear()} placeholder="Informe o ano de publicação do livro" />
                </Form.Group>
                
                <Form.Group as={Col} controlId="totalQuantity">
                    <Form.Label>Quantidade</Form.Label>
                    <Form.Control type="number" required min={0} placeholder="Informe a quantidade de livros" />
                </Form.Group>
            </Row>

            <Row className="mt-5">
                <Col>
                    <Button variant="secondary" type="button">Cancelar</Button>
                </Col>
                <Col className="text-end">
                    <Button variant="success" type="submit">Salvar</Button>
                </Col>
            </Row>
        </Form>
    );
}
