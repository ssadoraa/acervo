import { Alert, Container } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useUser } from "../hooks/useUser";
import UserView from "../components/UserView";
import { User } from "../../../shared/types/User";

export default function GetUser() {
    const { id } = useParams<{ id: string }>();
    const { getUserById, loading, error } = useUser();
	const [user, setUser] = useState<User | null>(null);

	useEffect(() => {
		async function fetchUsers() {
			try {
				const data = await getUserById(id!);
				if (data?.data) setUser(data.data);
			} catch (err) {
				console.error(err);
			}
		}
		fetchUsers();
	}, [id]);

	return (
		<Container>
			<h1 className="mb-4 mt-4">Detalhes do Usuário</h1>
			{error && <Alert variant="danger">{error}</Alert>}
			<UserView data={user} loading={loading}/>
		</Container>
	);
}