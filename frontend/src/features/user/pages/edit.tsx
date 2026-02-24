import { Alert, Container, Spinner } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useUser } from "../hooks/useUser";
import { UserFormData } from "../../../shared/types/User";
import UserForm from "../components/UserForm";

export default function EditUser() {
	const { id } = useParams<{ id: string }>();
	const { editUser, getUserById, loading, error } = useUser();
	const [user, setUser] = useState<UserFormData | null>(null);
	const [loadingUser, setLoadingUser] = useState(true);

	useEffect(() => {
		if (!id) return;

		async function loadUser() {
			setLoadingUser(true);
			try {
				const response = await getUserById(id!);
				if (response?.data) {
					const { id: _, ...userData } = response.data;
					setUser(userData);
				}
			} catch (err) {
				console.log(err);
			} finally {
				setLoadingUser(false);
			}
		}

		loadUser();
	}, [id]);


	async function handleSubmit(formData: UserFormData) {
		if (!id) return;

		await editUser(id, formData);
		alert("Usuário atualizado!");
	}

	if (loadingUser) return <Container className="text-center mt-5"><Spinner animation="border" /></Container>;
	if (!user) return <Container className="mt-5"><Alert variant="warning">Usuário não encontrado.</Alert></Container>;

	return (
	<Container>
		<h1 className="mb-4 mt-4">Editar Usuário</h1>
		{error && <Alert variant="danger">{error}</Alert>}
		<UserForm onSubmit={handleSubmit} loading={loading} initialData={user} />
	</Container>
	);
}