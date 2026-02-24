import { api } from "../../../shared/service/api";
import { UserFormData } from "../../../shared/types/User";

export function getAll() {
    return api.get(`/users`);
}

export function get(id: string) {
    return api.get(`/users/${id}`);
}

export function create(user: UserFormData) {
    return api.post("/users", user);
}

export function edit(user: UserFormData & { id: string }) {
    return api.put(`/users/${user.id}`, user);
}

export function deleteB(id: string) {
    return api.delete(`/users/${id}`);
}