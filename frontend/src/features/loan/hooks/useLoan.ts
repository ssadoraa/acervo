import { useState } from "react";
import * as loanService from "../services/loanService";
import { LoanFormData } from "../../../shared/types/Loan";

export function useLoan() {
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState<string | null>(null);

	async function handleRequest<T>(request: () => Promise<T>, errorMessage: string): Promise<T | undefined> {
		try {
			setLoading(true);
			setError(null);
			return await request();
		} catch (err) {
			setError(errorMessage);
			console.error(err);
			return undefined;
		} finally {
			setLoading(false);
		}
	}

	// Function for search all Loans
	async function getAllLoans() {
		return await handleRequest(() => loanService.getAll(), "Erro ao recuperar listagem de empréstimos.");
	}

	// Function for search Loan
	async function getLoanById(id: string) {
		return await handleRequest(() => loanService.get(id), "Erro ao recuperar empréstimo pelo id.");
	}
	
	// Function for create Loan
	async function createLoan(data: LoanFormData) {
		return await handleRequest(() => loanService.create(data), "Erro ao cadastrar empréstimo");
	}

	// Function for edit Loan
	async function editLoan(id: string, data: LoanFormData) {
		return await handleRequest(() => loanService.edit({ ...data, id }), "Erro ao editar empréstimo");
	}

	// Function for delete Loan
	async function deleteLoan(id: string) {
		return await handleRequest(() => loanService.deleteB(id), "Erro ao deletar empréstimo")
	}

	return { createLoan, editLoan, getLoanById, deleteLoan, getAllLoans, loading, error };
}