import { Alert, Container, Tab, Tabs } from "react-bootstrap";
import { useState, useEffect } from "react";
import { useUser } from "../hooks/useUser";
import UserTable from "../components/UserTable";
import { User } from "../../../shared/types/User";

export default function ListUsers() {
	const { getAllUsers, loading, error } = useUser();
  	const [users, setUsers] = useState<User[]>([]);
  	const [activeTab, setActiveTab] = useState<"ativos" | "inativos" | "todos">("ativos");

  	useEffect(() => {
    	async function fetchUsers() {
      		const data = await getAllUsers();
      		if (data?.data) setUsers(data.data);
    	}
    	fetchUsers();
  	}, []);

	// Filter users by state
	const activeUsers = users.filter((u) => u.active === true);
	const inactiveUsers = users.filter((u) => u.active === false);

  	return (
		<Container>
			<h1 className="mb-4 mt-4">Listagem dos Usuários</h1>
			{error && <Alert variant="danger">{error}</Alert>}

			<Tabs defaultActiveKey="ativos" id="user-tabs" className="mb-3"
				activeKey={activeTab}
				onSelect={(k) => k && setActiveTab(k as "ativos" | "inativos" | "todos")}>
				<Tab eventKey="ativos" title="Ativos">
					<UserTable data={activeUsers} loading={loading} />
				</Tab>
				<Tab eventKey="inativos" title="Inativos">
					<UserTable data={inactiveUsers} loading={loading} />
				</Tab>
				<Tab eventKey="todos" title="Todos">
					<UserTable data={users} loading={loading} />
				</Tab>
			</Tabs>
		</Container>
	);
}