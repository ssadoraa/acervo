import { Button, Table } from "react-bootstrap";
import SearchTable from "./SearchTable";
import { TypeSearch } from "../enum/TypeSearch";
import PaginationTable from "./PaginationTable";
import { Pencil } from "react-bootstrap-icons";
import { User } from "../../../shared/types/User";
import { useUserTable } from "../hooks/useUserTable";

interface UserTableProps {
	data: User[];
	loading: boolean;
}

export default function UserTable({ data, loading }: UserTableProps) {

	const { setSearchType, setSearchValue, currentPage, setCurrentPage, paginatedData, totalPages } = useUserTable(data);

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
						paginatedData.map((user) => (
							<tr key={user._id}>
								<td><a href={`/users/${user._id}`} className="text-black">{user.name}</a></td>
								<td className="d-flex justify-content-center gap-3">
										<Button className="btn-sm" href={`/users/edit/${user._id}`}>
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