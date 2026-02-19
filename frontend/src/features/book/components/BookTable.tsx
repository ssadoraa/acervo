import { Table } from "react-bootstrap";
import { Book } from "../types/Book";
import SearchTable from "./SearchTable";
import { useEffect, useState } from "react";
import { TypeSearch } from "../enum/TypeSearch";
import PaginationTable from "./PaginationTable";

interface BookTableProps {
	data: Book[];
	loading: boolean;
}

export default function BookTable({ data, loading }: BookTableProps) {

	const [searchType, setSearchType] = useState<TypeSearch | "">("");
	const [searchValue, setSearchValue] = useState<string>("");
	const [currentPage, setCurrentPage] = useState(1);
	
	const handleSearchChange = (type: TypeSearch | "", value: string) => {
		setSearchType(type);
		setSearchValue(value);
	};
	
	const filteredData = data.filter((book) => {
		if (!searchType || !searchValue) return true;

		switch (searchType) {
			case TypeSearch.TITULO:
				return book.title.toLowerCase().includes(searchValue.toLowerCase());
			case TypeSearch.AUTOR:
				return book.author.toLowerCase().includes(searchValue.toLowerCase());
			case TypeSearch.EDITORA:
				return book.publisher.toLowerCase().includes(searchValue.toLowerCase());
			case TypeSearch.ANO:
				return String(book.publicationYear).includes(searchValue);
			case TypeSearch.CATEGORIA:
				return book.category === searchValue;
			default:
				return true;
		}
	});
	
	const itemsPerPage = 10;
	const totalPages = Math.ceil(filteredData.length / itemsPerPage);
	const startIndex = (currentPage - 1) * itemsPerPage;
	const paginatedData = filteredData.slice(startIndex, startIndex + itemsPerPage);

	useEffect(() => {
		setCurrentPage(1);
	}, [searchType, searchValue]);


	return (
		<main>
			<SearchTable onSearchChange={handleSearchChange} />

			<Table striped bordered hover responsive>
				<thead>
					<tr>
						<th>ISBN</th>
						<th>Título</th>
						<th>Autor</th>
						<th>Ano</th>
						<th>Qtd</th>
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

			<PaginationTable currentPage={currentPage} totalPages={totalPages} onPageChange={setCurrentPage} />
		</main>
	);
}