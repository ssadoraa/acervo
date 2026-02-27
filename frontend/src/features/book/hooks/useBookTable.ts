import { useEffect, useMemo, useState } from "react";
import { Book } from "../../../shared/types/Book";
import { TypeSearchBook } from "../enum/TypeSearchBook";

export function useBookTable(data: Book[]) {
    const [searchType, setSearchType] = useState<string>("");
    const [searchValue, setSearchValue] = useState("");
    const [currentPage, setCurrentPage] = useState(1);

    const itemsPerPage = 10;

    const filteredData = useMemo(() => {
        return data.filter((book) => {
            if (!searchType || !searchValue) return true;

            switch (searchType) {
                case TypeSearchBook.Titulo:
                    return book.title.toLowerCase().includes(searchValue.toLowerCase());
                case TypeSearchBook.Autor:
                    return book.author.toLowerCase().includes(searchValue.toLowerCase());
                case TypeSearchBook.Editora:
                    return book.publisher.toLowerCase().includes(searchValue.toLowerCase());
                case TypeSearchBook.Ano:
                    return String(book.publicationYear).includes(searchValue);
                case TypeSearchBook.Categoria:
                    return book.category === searchValue;
                default:
                    return true;
            }
        });
    }, [data, searchType, searchValue]);

    const totalPages = Math.ceil(filteredData.length / itemsPerPage);

    const paginatedData = useMemo(() => {
        const startIndex = (currentPage - 1) * itemsPerPage;
        return filteredData.slice(startIndex, startIndex + itemsPerPage);
    }, [filteredData, currentPage]);

    useEffect(() => {
        setCurrentPage(1);
    }, [searchType, searchValue]);

    return {setSearchType, setSearchValue, currentPage, setCurrentPage, paginatedData, totalPages};
}