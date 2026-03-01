import { useEffect, useMemo, useState } from "react";
import { User } from "../../../shared/types/User";
import { TypeSearchUser } from "../enum/TypeSearchUser";

export function useUserTable(data: User[]) {
    const [searchType, setSearchType] = useState<string>("");
    const [searchValue, setSearchValue] = useState("");
    const [currentPage, setCurrentPage] = useState(1);

    const itemsPerPage = 10;

    const filteredData = useMemo(() => {
        return data.filter((user) => {
            if (!searchType || !searchValue) return true;

            switch (searchType) {
                case TypeSearchUser.Nome:
                    return user.name.toLowerCase().includes(searchValue.toLowerCase());
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