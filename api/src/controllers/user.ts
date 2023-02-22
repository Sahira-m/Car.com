import { Request, Response } from "Express";
import User from "../models/User";
import UserService from "../services/users";
import jwt from "jsonwebtoken";
// dotenv import
import dotenv from "dotenv";
export const makeNewUser = async (request: Request, response: Response) => {
  try {
    const newUser = new User({
      userName: request.body.name,
      email: request.body.email,
      password: request.body.password,
    });
    //new code for checking the user exist or not by using email
    const isEmailExist = await UserService.getUserByEmail(request.body.email);
    if (isEmailExist) {
      response.json(`The email already ${request.body.email} exist`);
      return;
    }

    const newUsers = await UserService.createUser(newUser);
    response.json(newUsers);
  } catch (error) {
    console.log(error);
  }
};
dotenv.config();

const JWT_SECRET = process.env.JWT_SECRET as string;
export const getUserByEmail = async (request: Request, response: Response) => {
  try {
    const userData = await UserService.getUserByEmail(request.body.email);
    if (!userData) {
      response.json({
        massage: `The email ${request.body.email} doesn't exist`,
      });
      return;
    }
    //TOKEN
    const token = jwt.sign(
      { email: request.body.email, id: userData._id },
      JWT_SECRET,
      { expiresIn: "1h" }
    );
    response.json({ userData, token });
  } catch (error) {
    console.log(error);
  }
};

export const updateUserById = async (request: Request, response: Response) => {
  try {
    const update = await UserService.updateById(
      request.params.userId,
      request.body
    );
    response.json(update);
  } catch (error) {
    console.log(error);
  }
};
