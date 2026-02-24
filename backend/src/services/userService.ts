import { User } from '../models/User';

export const getAllUsersService = async () => {
    return await User.find();
};

export const getUserByIdService = async (id: string) => {
    return await User.findById(id);
};

export const createUserService = async (user: any) => {
    return await User.create(user);
};

export const updateUserService = async (id: string, user: any) => {
    return await User.findByIdAndUpdate(id, user, { new: true });
};

export const deleteUserService = async (id: string) => {
    return await User.findByIdAndDelete(id);
};