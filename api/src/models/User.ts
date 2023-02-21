import mongoose, { Document } from "mongoose";

export type UserDocument = Document & {
  name: string;
  password: string;
  gender: string;
  dateOfBirth: Date;
  email: string;
};
const UserSchema = new mongoose.Schema({
  name: { type: String, required: true },
  password: { type: String, required: true },
  gender: String,
  dateOfBirth: Date,
  email: { type: String, unique: true, required: true },
});

export default mongoose.model<UserDocument>("User", UserSchema);
