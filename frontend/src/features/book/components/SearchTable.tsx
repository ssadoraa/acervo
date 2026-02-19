import { Col, Form, Row } from "react-bootstrap";
import { TypeSearch } from "../enum/TypeSearch";
import { useCategories } from "../hooks/useCategories";
import React, { useState } from "react";

interface SearchTableProps {
    onSearchChange: (type: TypeSearch | "", value: string) => void;
}

export default function SearchTable({ onSearchChange } : SearchTableProps){

    const [selected, setSelected] = useState<TypeSearch | "">("");
    const [search, setSearch] = useState<string>("");
    const { categories, loading: loadingCategories } = useCategories();

    const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const value = event.target.value as TypeSearch;
        setSelected(value);
        setSearch("");
        onSearchChange(value, "");
    };
    
    const handleResult = (event: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>) => {
        const value = event.target.value;
        setSearch(value);
        onSearchChange(selected, value);
    };

    return (
        <Form>
            <fieldset>
                <Row className="mb-4 mt-3">
                    <Form.Group as={Col} md={4} controlId="typeSearch">
                        <Form.Select name="typeSearch" value={selected} onChange={handleChange}>
                            <option value="" disabled>Selecione o tipo de pesquisa...</option>
                            {Object.values(TypeSearch).map((value) => (
                                <option key={value} value={value}>{value}</option>
                            ))}
                        </Form.Select>
                    </Form.Group>

                    {selected && selected !== TypeSearch.CATEGORIA && (
                        <Form.Group as={Col} md={8} controlId="valueSearch" onChange={handleResult}>
                            <Form.Control name="valueSearch" type="text" value={search} placeholder="Digite o termo de pesquisa"/>
                        </Form.Group>
                    )}

                    {selected === TypeSearch.CATEGORIA && (
                        <Form.Group as={Col} md={8} controlId="categoriaSelect">
                            <Form.Select name="categoriaSelect" value={search} onChange={handleResult}>
                                <option value="" disabled>{loadingCategories ? "Carregando..." : "Selecione a categoria"}</option>
                                {!loadingCategories && categories.map((cat) => <option key={cat} value={cat}>{cat}</option>)}
                            </Form.Select>
                        </Form.Group>
                    )}
                </Row>
            </fieldset>
        </Form>        
    )
}