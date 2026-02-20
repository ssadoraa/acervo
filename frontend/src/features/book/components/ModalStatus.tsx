import { Button, Modal } from "react-bootstrap";

interface ModalStatusProps {
    showConfirm: boolean;
    cancelToggle: () => void;
    confirmToggle: () => Promise<void>;
    title: string;
}

export default function ModalStatus({ showConfirm, cancelToggle, confirmToggle, title }: ModalStatusProps) {
    return (
        <Modal show={showConfirm} onHide={cancelToggle}>
            <Modal.Header>
                <Modal.Title>Confirmar Desativação</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                Tem certeza que deseja desativar o livro "{title}"?
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={cancelToggle}>
                    Cancelar
                </Button>
                <Button variant="danger" onClick={confirmToggle}>
                    Desativar
                </Button>
            </Modal.Footer>
        </Modal>
    )
}