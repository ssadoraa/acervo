import { Alert, Button, Col, Container, Form, Row, Spinner } from "react-bootstrap";
import { Loan } from "../../../shared/types/Loan";

interface LoanViewProps {
	data: Loan | null;
	loading: boolean;
}

export default function LoanView({ data, loading }: LoanViewProps) {

	if (loading) return <Container className="text-center mt-5"><Spinner animation="border" /></Container>;
	if (!data) return <Alert variant="warning mt-4">Usuário não encontrado.</Alert>;

	return (
		<>
			<Form className="mt-5">
				<header className="mb-4">
					<h3 className="fw-semibold mb-1">{data.userId}</h3>
					<div className="text-muted fs-5">por {data.bookId}</div>
				</header>

				<hr className="my-4 opacity-25" />

				<Row className="mt-5 justify-content-between align-items-center">
					<Col xs="auto">
						<Button variant="secondary" href="/loans">Voltar</Button>
					</Col>
				</Row>
			</Form>
		</>
	);
}