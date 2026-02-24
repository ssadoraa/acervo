import { api } from "../../../shared/service/api";
import { LoanFormData } from "../../../shared/types/Loan";

export function getAll() {
    return api.get(`/loans`);
}

export function get(id: string) {
    return api.get(`/loans/${id}`);
}

export function create(loan: LoanFormData) {
    return api.post("/loans", loan);
}

export function edit(loan: LoanFormData & { id: string }) {
    return api.put(`/loans/${loan.id}`, loan);
}

export function deleteB(id: string) {
    return api.delete(`/loans/${id}`);
}