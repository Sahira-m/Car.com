import User, { UserDocument } from "../models/User";

const createUser = async (newUser: UserDocument): Promise<UserDocument> => {
  return newUser.save();
};

const getUser = async (): Promise<UserDocument[]> => {
  return User.find();
};
//new code for jwt token
const getUserByEmail = async (email: string): Promise<UserDocument | null> => {
  const user = User.findOne({ email: email });
  return user;
};

const deleteByEmail = async (email: string): Promise<UserDocument | null> => {
  return User.findByIdAndRemove(email);
};

const updateById = async (
  userId: String,
  userUpdates: UserDocument
): Promise<UserDocument | null> => {
  return User.findByIdAndUpdate(userId, userUpdates, { new: true });
};

export default {
  createUser,
  getUser,
  deleteByEmail,
  updateById,
  getUserByEmail,
};
