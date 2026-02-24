import { Alert, Container } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useLoan } from "../hooks/useLoan";
import LoanView from "../components/LoanView";
import { Loan } from "../../../shared/types/Loan";

export default function GetLoan() {
    const { id } = useParams<{ id: string }>();
    const { getLoanById, loading, error } = useLoan();
	const [loan, setLoan] = useState<Loan | null>(null);

	useEffect(() => {
		async function fetchLoans() {
			try {
				const data = await getLoanById(id!);
				if (data?.data) setLoan(data.data);
			} catch (err) {
				console.error(err);
			}
		}
		fetchLoans();
	}, [id]);

	return (
		<Container>
			<h1 className="mb-4 mt-4">Detalhes do Empréstimo</h1>
			{error && <Alert variant="danger">{error}</Alert>}
			<LoanView data={loan} loading={loading}/>
		</Container>
	);
}