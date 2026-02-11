import { Container, Navbar } from "react-bootstrap";

export default function Header() {
    return (
        <Navbar expand="lg" bg="dark" data-bs-theme="dark" className="bg-body-tertiary">
            <Container>
                <Navbar.Brand href="#home" className="me-5">
                    Acervô
                </Navbar.Brand>

                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}