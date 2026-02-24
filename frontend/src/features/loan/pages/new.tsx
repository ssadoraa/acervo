import { Alert, Container } from "react-bootstrap";
import { LoanFormData } from "../../../shared/types/Loan";
import { useLoan } from "../hooks/useLoan";
import LoanForm from "../components/LoanForm";

export default function CreateLoan() {
	const { createLoan, loading, error } = useLoan();

	async function handleSubmit(loan: LoanFormData) {
		const result = await createLoan(loan);
		if (result?.data) alert("Usuário criado");
	}

	return (
	<Container>
		<h1 className="mb-4 mt-4">Cadastrar Usuário</h1>
		{error && <Alert variant="danger">{error}</Alert>}
		<LoanForm onSubmit={handleSubmit} loading={loading} />
	</Container>
	);
}