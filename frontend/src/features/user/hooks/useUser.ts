import { useState } from "react";
import * as userService from "../services/userService";
import { UserFormData } from "../../../shared/types/User";

export function useUser() {
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

	// Function for search all Users
	async function getAllUsers() {
		return await handleRequest(() => userService.getAll(), "Erro ao recuperar listagem de usuários.");
	}

	// Function for search User
	async function getUserById(id: string) {
		return await handleRequest(() => userService.get(id), "Erro ao recuperar usuário pelo id.");
	}
	
	// Function for create User
	async function createUser(data: UserFormData) {
		return await handleRequest(() => userService.create(data), "Erro ao cadastrar usuário");
	}

	// Function for edit User
	async function editUser(id: string, data: UserFormData) {
		return await handleRequest(() => userService.edit({ ...data, id }), "Erro ao editar usuário");
	}

	// Function for delete User
	async function deleteUser(id: string) {
		return await handleRequest(() => userService.deleteB(id), "Erro ao deletar usuário")
	}

	return { createUser, editUser, getUserById, deleteUser, getAllUsers, loading, error };
}