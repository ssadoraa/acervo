import { Request, Response } from 'express';
import { createUserService, deleteUserService, getAllUsersService, getUserByIdService, updateUserService } from '../services/userService';

// Controller function to get all users
export const getAllUsers = async (_req: Request, res: Response) => {
    try {
        const users =  await getAllUsersService();
        return res.status(200).json(users);
    } catch (error: any) {
        res.status(500).json({ message: "Error fetching users", error: error.message });
    }

};

// Controller function to get a user by ID
export const getUserById = async (req: Request, res: Response) => {
    try {
        const user =  await getUserByIdService(req.params.id as string);

        if (!user) {
            return res.status(404).json({ message: "user not found" });
        }

        return res.status(200).json(user);
    } catch (error: any) {
        res.status(500).json({ message: "Error fetching user", error: error.message });
    }
};

// Controller function to create a new user
export const createUser = async (req: Request, res: Response) => {
    try {
        const user =  await createUserService(req.body);
        return res.status(201).json(user);
    } catch (error: any) {
        res.status(400).json({ message: "Error creating user", error: error.message });
    }
};

// Controller function to update a user by ID
export const updateUser = async (req: Request, res: Response) => {
    try {
        const user = await updateUserService(req.params.id as string, req.body);

        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        return res.status(200).json(user);
    } catch (error: any) {
        res.status(400).json({ message: "Error updating user", error: error.message });
    }
};

// Controller function to delete a user by ID
export const deleteUser = async (req: Request, res: Response) => {
    try {
        const user = await deleteUserService(req.params.id as string);

        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        return res.status(200).json({ message: "user deleted successfully" });
    } catch (error: any) {
        res.status(500).json({ message: "Error deleting user", error: error.message });
    }
};