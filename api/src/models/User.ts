import mongoose, { Document } from "mongoose";

export type UserDocument = Document & {
  name: string;
  password: string;
  email: string;
};
const UserSchema = new mongoose.Schema({
  name: { type: String },
  password: { type: String },
  email: { type: String, unique: true },
});

export default mongoose.model<UserDocument>("User", UserSchema);
