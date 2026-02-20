import { Badge, Button, Table } from "react-bootstrap";
import { Book } from "../types/Book";
import SearchTable from "./SearchTable";
import { TypeSearch } from "../enum/TypeSearch";
import PaginationTable from "./PaginationTable";
import { useBookTable } from "../hooks/useBookTable";
import { Pencil } from "react-bootstrap-icons";

interface BookTableProps {
	data: Book[];
	loading: boolean;
}

export default function BookTable({ data, loading }: BookTableProps) {

	const { setSearchType, setSearchValue, currentPage, setCurrentPage, paginatedData, totalPages } = useBookTable(data);

	const handleSearchChange = (type: TypeSearch | "", value: string) => {
		setSearchType(type);
		setSearchValue(value);
	}

	return (
		<main>
			<SearchTable onSearchChange={handleSearchChange} />

			<Table striped bordered hover responsive>
				<thead>
					<tr>
						<th>ISBN</th>
						<th>Título</th>
						<th>Autor</th>
						<th className="text-center">Qtd</th>
						<th></th>
					</tr>
				</thead>

				<tbody>
					{loading ? (
						<tr>
							<td colSpan={6} className="text-center">Carregando</td>
						</tr>
					) : paginatedData.length === 0 ? (
						<tr>
							<td colSpan={6} className="text-center">Nenhum livro encontrado.</td>
						</tr>
					) : (
						paginatedData.map((book) => (
							<tr key={book.id}>
								<td>{book.isbn}</td>
								<td><a href={`/book/${book.id}`} className="text-black">{book.title}</a></td>
								<td>{book.author}</td>
								<td className="text-center">
									<Badge 
										bg={book.totalQuantity === 0
											? "danger"
											: book.totalQuantity <= 2
											? "warning"
											: "success"
										}
									>{book.totalQuantity}
									</Badge>
								</td>								
								<td className="d-flex justify-content-center gap-3">
										<Button className="btn-sm" href={`/book/edit/${book.id}`}>
											<Pencil />
										</Button>
								</td>
							</tr>
						))
					)}
				</tbody>
			</Table>

			<PaginationTable currentPage={currentPage} totalPages={totalPages} onPageChange={setCurrentPage} />
		</main>
	);
}