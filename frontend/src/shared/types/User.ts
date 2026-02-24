export interface User {
    _id: string;
    name: string;
    email: string;
    telephone: string;
    role: string;
    active: boolean;
}

// Create a new User type excluding the ID
export type UserFormData = Omit<User, "_id">;