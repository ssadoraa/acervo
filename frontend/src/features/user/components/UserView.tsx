import { Alert, Button, Col, Container, Form, Row, Spinner } from "react-bootstrap";
import { User } from "../../../shared/types/User";

interface UserViewProps {
	data: User | null;
	loading: boolean;
}

export default function UserView({ data, loading }: UserViewProps) {

	if (loading) return <Container className="text-center mt-5"><Spinner animation="border" /></Container>;
	if (!data) return <Alert variant="warning mt-4">Usuário não encontrado.</Alert>;

	return (
		<>
			<Form className="mt-5">
				<header className="mb-4">
					<h3 className="fw-semibold mb-1">{data.name}</h3>
					<div className="text-muted fs-5">por {data.email}</div>
				</header>

				<hr className="my-4 opacity-25" />

				<Row className="g-4">
					<Col md={8}>
						<Row className="g-4">
							<Col sm={6}>
								<Form.Group>
									<Form.Label className="small text-muted">Categoria</Form.Label>
									<Form.Control type="text" value={data.telephone} readOnly disabled />
								</Form.Group>
							</Col>
						</Row>
					</Col>
				</Row>

				<Row className="mt-5 justify-content-between align-items-center">
					<Col xs="auto">
						<Button variant="secondary" href="/users">Voltar</Button>
					</Col>
				</Row>
			</Form>
		</>
	);
}