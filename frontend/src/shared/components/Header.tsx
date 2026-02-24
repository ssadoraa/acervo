import { Container, Navbar, NavDropdown } from "react-bootstrap";

export default function Header() {
    return (
        <Navbar expand="lg" bg="dark" data-bs-theme="dark" className="bg-body-tertiary">
            <Container>
                <Navbar.Brand href="/" className="me-5">
                    Acervô
                </Navbar.Brand>

                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">

                <NavDropdown title="Livros" id="basic-nav-dropdown" className="text-white">
                    <NavDropdown.Item href="/books">Listar todos</NavDropdown.Item>
                    <NavDropdown.Item href="/books/new">Cadastrar</NavDropdown.Item>
                </NavDropdown>
                
                <NavDropdown title="Usuários" id="basic-nav-dropdown" className="text-white">
                    <NavDropdown.Item href="/users">Listar todos</NavDropdown.Item>
                    <NavDropdown.Item href="/users/new">Cadastrar</NavDropdown.Item>
                </NavDropdown>
                    
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}