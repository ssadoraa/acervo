import { Alert, Button, Col, Container, Form, Row, Spinner } from "react-bootstrap";
import { Book } from "../types/Book";
import useBookToggle from "../hooks/useBookToggle";
import ModalStatus from "./ModalStatus";

interface BookViewProps {
	data: Book | null;
	loading: boolean;
	onToggleActivate: (id: string) => Promise<any>;
}

export default function BookView({ data, loading, onToggleActivate }: BookViewProps) {

	const { showConfirm, requestToggle, confirmToggle, cancelToggle } = useBookToggle(onToggleActivate, data);

	if (loading) return <Container className="text-center mt-5"><Spinner animation="border" /></Container>;
	if (!data) return <Alert variant="warning mt-4">Livro não encontrado.</Alert>;

	return (
		<>
			<Form className="mt-5">
				<header className="mb-4">
					<h3 className="fw-semibold mb-1">{data.title}</h3>
					<div className="text-muted fs-5">por {data.author}</div>
				</header>

				<hr className="my-4 opacity-25" />

				<Row className="g-4">
					<Col md={8}>
						<Row className="g-4">
							<Col sm={6}>
								<Form.Group>
									<Form.Label className="small text-muted">Categoria</Form.Label>
									<Form.Control type="text" value={data.category} readOnly disabled />
								</Form.Group>
							</Col>
							<Col sm={6}>
								<Form.Group>
									<Form.Label className="small text-muted">Ano</Form.Label>
									<Form.Control type="text" value={data.publicationYear} readOnly disabled />
								</Form.Group>
							</Col>
							<Col sm={6}>
								<Form.Group>
									<Form.Label className="small text-muted">Editora</Form.Label>
									<Form.Control type="text" value={data.publisher} readOnly disabled />
								</Form.Group>
							</Col>
							<Col sm={6}>
								<Form.Group>
									<Form.Label className="small text-muted">ISBN</Form.Label>
									<Form.Control type="text" value={data.isbn} readOnly disabled className="text-break fs-6" />
								</Form.Group>
							</Col>
						</Row>
					</Col>

					<Col md={4}>
						<div
							className={`
							p-4 rounded-4 text-center h-100 d-flex flex-column justify-content-center
							${data.totalQuantity === 1 ? 'bg-warning-subtle text-warning' :
								data.totalQuantity === 0 ? 'bg-danger-subtle text-danger' :
								'bg-success-subtle text-success'}
							`}
						>
							<div className="display-6 fw-semibold">{data.totalQuantity}</div>
							<div className="text-muted">exemplares disponíveis</div>
						</div>
					</Col>
				</Row>

				<Row className="mt-5 justify-content-between align-items-center">
					<Col xs="auto">
						<Form.Group id="formGridCheckbox">
							<Form.Check type="switch" id="active" label="Ativar/Desativar o livro"
								checked={data.active} onChange={e => requestToggle(e.target.checked)}
							/>
						</Form.Group>
					</Col>
					<Col xs="auto">
						<Button variant="secondary" href="/book">Voltar</Button>
					</Col>
				</Row>
			</Form>

			<ModalStatus showConfirm={showConfirm} cancelToggle={cancelToggle} confirmToggle={confirmToggle} title={data.title} />
		</>
	);
}