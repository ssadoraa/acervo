import { Col, Form, Row } from "react-bootstrap";
import { useCategories } from "../../features/book/hooks/useCategories";
import React, { useState } from "react";
import { TypeSearchBook } from "../../features/book/enum/TypeSearchBook";

interface SearchType {
    label: string;
    value: string;
    placeholder: string;
}

interface SearchTableProps {
    onSearchChange: (type: string, value: string) => void;
    searchTypes: SearchType[];
}

export default function SearchTable({ onSearchChange, searchTypes } : SearchTableProps){

    const [selected, setSelected] = useState<string>("");
    const [search, setSearch] = useState<string>("");
    const { categories, loading: loadingCategories } = useCategories();

    const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const value = event.target.value;
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
                            {searchTypes.map((type) => (
                                <option key={type.value} value={type.value}>{type.label}</option>
                            ))}
                        </Form.Select>
                    </Form.Group>

                    {selected && selected !== TypeSearchBook.Categoria && (
                        <Form.Group as={Col} md={8} controlId="valueSearch" onChange={handleResult}>
                            <Form.Control name="valueSearch" type="text" value={search} 
                                          placeholder={selected ? searchTypes.find(t => t.value === selected)?.placeholder : ''}
                            />
                        </Form.Group>
                    )}

                    {selected === TypeSearchBook.Categoria && (
                        <Form.Group as={Col} md={8} controlId="categoriaSelect">
                            <Form.Select name="categoriaSelect" value={search} onChange={handleResult}>
                                <option value="" disabled>{loadingCategories ? "Carregando..." : "Procure pela categoria..."}</option>
                                {!loadingCategories && categories.map((cat) => <option key={cat} value={cat}>{cat}</option>)}
                            </Form.Select>
                        </Form.Group>
                    )}
                </Row>
            </fieldset>
        </Form>        
    )
}