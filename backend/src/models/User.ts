import { Schema, model, Document } from "mongoose";
import { Role } from "../enums/Role";

interface IUser extends Document {
	name: string;
	email: string;
	telephone: string;
	role: Role;
	insertAt?: Date;
}

const userSchema = new Schema<IUser>(
	{
		name: { type: String, required: true },
		email: { type: String, required: true },
		telephone: { type: String, required: true },
		role: { type: String, enum: Object.values(Role), required: true },
	},
	{ timestamps: { createdAt: "insertAt" } }
);

export const User = model<IUser>("User", userSchema);