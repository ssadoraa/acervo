import { Button, Table } from "react-bootstrap";
import SearchTable from "../../../shared/components/SearchTable";
import { Pencil } from "react-bootstrap-icons";
import { Loan } from "../../../shared/types/Loan";
import { useLoanTable } from "../hooks/useLoanTable";
import PaginationTable from "../../../shared/components/PaginationTable";
import { searchOptionsLoan } from "../enum/TypeSearchLoan";

interface LoanTableProps {
	data: Loan[];
	loading: boolean;
}

export default function LoanTable({ data, loading }: LoanTableProps) {

	const { setSearchType, setSearchValue, currentPage, setCurrentPage, paginatedData, totalPages } = useLoanTable(data);

	const handleSearchChange = (type: string, value: string) => {
		setSearchType(type);
		setSearchValue(value);
	}

	return (
		<main>
			<SearchTable onSearchChange={handleSearchChange} searchTypes={searchOptionsLoan} />

			<Table striped bordered hover responsive>
				<thead>
					<tr>
						<th>Nome</th>
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
							<td colSpan={6} className="text-center">Nenhum usuário encontrado.</td>
						</tr>
					) : (
						paginatedData.map((loan) => (
							<tr key={loan._id}>
								<td><a href={`/loans/${loan._id}`} className="text-black">{loan.userId}</a></td>
								<td className="d-flex justify-content-center gap-3">
										<Button className="btn-sm" href={`/loans/edit/${loan._id}`}>
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