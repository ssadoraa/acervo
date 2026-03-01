import { Alert, Container } from "react-bootstrap";
import { UserFormData } from "../../../shared/types/User";
import { useUser } from "../hooks/useUser";
import UserForm from "../components/UserForm";

export default function CreateUser() {
	const { createUser, loading, error } = useUser();

	async function handleSubmit(user: UserFormData) {
		const result = await createUser(user);
		if (result?.data) alert("Usuário criado");
	}

	return (
	<Container>
		<h1 className="mb-4 mt-4">Cadastrar Usuário</h1>
		{error && <Alert variant="danger">{error}</Alert>}
		<UserForm onSubmit={handleSubmit} loading={loading} />
	</Container>
	);
}