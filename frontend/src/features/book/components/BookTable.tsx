import { Table } from "react-bootstrap";
import { Book } from "../types/BookFormData";

interface BookTableProps {
	data: Book[];
	loading: boolean;
}

export default function BookTable({ data, loading }: BookTableProps) {

	return (
		<main>
			<Table striped bordered hover>
				<thead>
					<tr>
						<th>#</th>
						<th>Título</th>
						<th>Autor</th>
						<th>Ano Publicação</th>
						<th>Quantidade</th>
						<th></th>
					</tr>
				</thead>

				<tbody>
					{loading ? (
						<tr>
							<td colSpan={6} className="text-center">Carregando</td>
						</tr>
					) : data.length === 0 ? (
						<tr>
							<td colSpan={6} className="text-center">Nenhum livro encontrado.</td>
						</tr>
					) : (
						data.map((book) => (
							<tr key={book.id}>
								<td>{book.isbn}</td>
								<td>{book.title}</td>
								<td>{book.author}</td>
								<td>{book.publicationYear}</td>
								<td>{book.totalQuantity}</td>
								<td>Action</td>
							</tr>
						))
					)}
				</tbody>
			</Table>
		</main>
	);
}