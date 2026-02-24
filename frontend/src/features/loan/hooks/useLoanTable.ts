import { useEffect, useMemo, useState } from "react";
import { TypeSearch } from "../enum/TypeSearch";
import { Loan } from "../../../shared/types/Loan";

export function useLoanTable(data: Loan[]) {
    const [searchType, setSearchType] = useState<TypeSearch | "">("");
    const [searchValue, setSearchValue] = useState("");
    const [currentPage, setCurrentPage] = useState(1);

    const itemsPerPage = 10;

    const filteredData = useMemo(() => {
        return data.filter((loan) => {
            if (!searchType || !searchValue) return true;

            switch (searchType) {
                case TypeSearch.NOME:
                    return loan.userId.toLowerCase().includes(searchValue.toLowerCase());
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