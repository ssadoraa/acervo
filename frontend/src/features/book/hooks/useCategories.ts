import { useEffect, useState } from "react";
import { getCategories } from "../services/categoryService";

export const useCategories = () => {
    const [categories, setCategories] = useState<string[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchCategories = async () => {
            setLoading(true);
            const data = await getCategories();
            setCategories(data);
            setLoading(false);
        };

        fetchCategories();
    }, []);

    return { categories, loading };
};
