import { Pagination } from "react-bootstrap";

interface PaginationTableProps {
    currentPage: number;
    totalPages: number;
    onPageChange: (page: number) => void;
}

export default function PaginationTable({ currentPage, totalPages, onPageChange }: PaginationTableProps) {

    let items = [];

    for (let index = 1; index <= totalPages; index++) {
        items.push(
            <Pagination.Item key={index} active={index === currentPage} onClick={() => onPageChange(index)}>{index}</Pagination.Item>
        );
    }

    return (
        <Pagination className="mt-4 d-flex justify-content-center">
            <Pagination.First onClick={() => onPageChange(1)} disabled={currentPage === 1} />
            <Pagination.Prev onClick={() => onPageChange(Math.max(currentPage - 1, 1))} disabled={currentPage === 1} />

            {items}

            <Pagination.Next onClick={() => onPageChange(Math.min(currentPage + 1, totalPages))} disabled={currentPage === totalPages} />
            <Pagination.Last onClick={() => onPageChange(totalPages)} disabled={currentPage === totalPages} />
        </Pagination>
    )
}