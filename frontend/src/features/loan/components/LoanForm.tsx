import { Button, Col, Form, Row, Spinner } from "react-bootstrap";
import { useEffect, useState } from "react";
import { LoanFormData } from "../../../shared/types/Loan";

interface LoanFormProps {
    onSubmit: (loan: LoanFormData) => void;
    initialData?: LoanFormData;
    loading: boolean;
}

export default function LoanForm({ onSubmit, loading, initialData }: LoanFormProps) {
    const [form, setForm] = useState<LoanFormData>({
        userId: "",
        bookId: "",
        returnDate: new Date()
    });

    // Updates the form when initialData changes (EditUser)
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
            userId: "",
            bookId: "",
            returnDate: new Date()
        });
    }

    return (
        <Form onSubmit={handleSubmit}>
            <fieldset disabled={loading}>
                {/* <Form.Group className="mb-3" controlId="name">
                    <Form.Label>Nome Completo</Form.Label>
                    <Form.Control name="name" type="text" value={form.name} onChange={handleChange} required
                        placeholder="Informe o nome completo"
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="email">
                    <Form.Label>Email</Form.Label>
                    <Form.Control name="email" type="email" value={form.email} onChange={handleChange} required
                        placeholder="Informe o email"
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="telephone">
                    <Form.Label>Celular (DDD)</Form.Label>
                    <Form.Control name="telephone" type="text" value={form.telephone} onChange={handleChange} required
                        placeholder="Ex: (55) 99999-9999"
                    />
                </Form.Group>

                <Form.Group controlId="role">
                    <Form.Label>Tipo de Acesso</Form.Label>
                    <Form.Select name="role" value={form.role} onChange={handleChange} >
                        <option value="" disabled>Selecione o tipo de acesso do usuário</option>
                        <option value="LEITOR">Leitor</option>
                        <option value="EMPREGADO">Empregado</option>
                    </Form.Select>
                </Form.Group> */}

                <Row className="mt-5">
                    <Col>
                        <Button variant="secondary" type="button" onClick={handleReset} href="/loans">Cancelar</Button>
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