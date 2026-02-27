import { useEffect, useMemo, useState } from "react";
import { Loan } from "../../../shared/types/Loan";
import { TypeSearchLoan } from "../enum/TypeSearchLoan";

export function useLoanTable(data: Loan[]) {
    const [searchType, setSearchType] = useState<string>("");
    const [searchValue, setSearchValue] = useState("");
    const [currentPage, setCurrentPage] = useState(1);

    const itemsPerPage = 10;

    const filteredData = useMemo(() => {
        return data.filter((loan) => {
            if (!searchType || !searchValue) return true;

            switch (searchType) {
                case TypeSearchLoan.Nome:
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