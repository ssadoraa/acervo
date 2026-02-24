import { Alert, Container, Spinner } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useLoan } from "../hooks/useLoan";
import { LoanFormData } from "../../../shared/types/Loan";
import LoanForm from "../components/LoanForm";

export default function EditLoan() {
	const { id } = useParams<{ id: string }>();
	const { editLoan, getLoanById, loading, error } = useLoan();
	const [loan, setLoan] = useState<LoanFormData | null>(null);
	const [loadingLoan, setLoadingLoan] = useState(true);

	useEffect(() => {
		if (!id) return;

		async function loadLoan() {
			setLoadingLoan(true);
			try {
				const response = await getLoanById(id!);
				if (response?.data) {
					const { id: _, ...loanData } = response.data;
					setLoan(loanData);
				}
			} catch (err) {
				console.log(err);
			} finally {
				setLoadingLoan(false);
			}
		}

		loadLoan();
	}, [id]);


	async function handleSubmit(formData: LoanFormData) {
		if (!id) return;

		await editLoan(id, formData);
		alert("Empréstimso atualizado!");
	}

	if (loadingLoan) return <Container className="text-center mt-5"><Spinner animation="border" /></Container>;
	if (!loan) return <Container className="mt-5"><Alert variant="warning">Empréstimso não encontrado.</Alert></Container>;

	return (
	<Container>
		<h1 className="mb-4 mt-4">Editar Empréstimso</h1>
		{error && <Alert variant="danger">{error}</Alert>}
		<LoanForm onSubmit={handleSubmit} loading={loading} initialData={loan} />
	</Container>
	);
}