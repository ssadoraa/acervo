import { Alert, Container, Tab, Tabs } from "react-bootstrap";
import { useBook } from "../hooks/useBook";
import { useState, useEffect } from "react";
import BookTable from "../components/BookTable";
import { Book } from "../types/Book";

export default function ListBooks() {
	const { getAllBooks, loading, error } = useBook();
  	const [books, setBooks] = useState<Book[]>([]);
  	const [activeTab, setActiveTab] = useState<"ativos" | "inativos" | "todos">("ativos");

  	useEffect(() => {
    	async function fetchBooks() {
      		const data = await getAllBooks();
      		if (data?.data) setBooks(data.data);
    	}
    	fetchBooks();
  	}, [getAllBooks]);

	// Filter books by state
	const activeBooks = books.filter((b) => b.active === true);
	const inactiveBooks = books.filter((b) => b.active === false);

  	return (
		<Container>
			<h1 className="mb-4 mt-4">Listagem dos Livros</h1>
			{error && <Alert variant="danger">{error}</Alert>}

			<Tabs defaultActiveKey="ativos" id="book-tabs" className="mb-3"
				activeKey={activeTab}
				onSelect={(k) => k && setActiveTab(k as "ativos" | "inativos" | "todos")}>
				<Tab eventKey="ativos" title="Ativos">
					<BookTable data={activeBooks} loading={loading} />
				</Tab>
				<Tab eventKey="inativos" title="Inativos">
					<BookTable data={inactiveBooks} loading={loading} />
				</Tab>
				<Tab eventKey="todos" title="Todos">
					<BookTable data={books} loading={loading} />
				</Tab>
			</Tabs>
		</Container>
	);
}