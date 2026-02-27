import { Container, Navbar, Nav, NavDropdown } from "react-bootstrap";

export default function Header() {
    return (
        <Navbar expand="lg" bg="dark" data-bs-theme="dark">
            <Container>
                <Navbar.Brand href="/" className="me-5">
                    Acervô
                </Navbar.Brand>

                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <NavDropdown title="Empréstimos" id="nav-emprestimos" className="me-3">
                            <NavDropdown.Item href="/loans">Listar todos</NavDropdown.Item>
                            <NavDropdown.Item href="/loans/new">Criar</NavDropdown.Item>
                        </NavDropdown>

                        <NavDropdown title="Livros" id="nav-livros" className="me-3">
                            <NavDropdown.Item href="/books">Listar todos</NavDropdown.Item>
                            <NavDropdown.Item href="/books/new">Cadastrar</NavDropdown.Item>
                        </NavDropdown>

                        <NavDropdown title="Usuários" id="nav-usuarios">
                            <NavDropdown.Item href="/users">Listar todos</NavDropdown.Item>
                            <NavDropdown.Item href="/users/new">Cadastrar</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}