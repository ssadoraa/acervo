import { Alert, Container, Tab, Tabs } from "react-bootstrap";
import { useState, useEffect } from "react";
import { useLoan } from "../hooks/useLoan";
import { Loan } from "../../../shared/types/Loan";
import LoanTable from "../components/LoanTable";

export default function ListLoans() {
	const { getAllLoans, loading, error } = useLoan();
  	const [loans, setLoans] = useState<Loan[]>([]);
  	const [activeTab, setActiveTab] = useState<"ativos" | "inativos" | "todos">("ativos");

  	useEffect(() => {
    	async function fetchLoans() {
      		const data = await getAllLoans();
      		if (data?.data) setLoans(data.data);
    	}
    	fetchLoans();
  	}, []);

  	return (
		<Container>
			<h1 className="mb-4 mt-4">Listagem dos Usuários</h1>
			{error && <Alert variant="danger">{error}</Alert>}

			<Tabs defaultActiveKey="ativos" id="loan-tabs" className="mb-3"
				activeKey={activeTab}
				onSelect={(k) => k && setActiveTab(k as "ativos" | "inativos" | "todos")}>
				<Tab eventKey="todos" title="Todos">
					<LoanTable data={loans} loading={loading} />
				</Tab>
			</Tabs>
		</Container>
	);
}