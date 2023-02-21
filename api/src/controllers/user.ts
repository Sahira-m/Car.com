import { request, Request, Response } from "Express";
import User from "../models/User";
import UserService from "../services/user";
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

export const deleteUserById = async (request: Request, response: Response) => {
  try {
    const getProdctById = await UserService.getUserByEmail(
      request.params.email
    );
    if (getProdctById) {
      const deleteProdct = await UserService.deleteByEmail(
        request.params.userId
      );

      const getUser = await UserService.getUser();
      response.status(200).json(getUser);
    } else response.json("The id doesn't exist");
  } catch (error) {
    console.log(error);
  }
};

export const updateUserByName = async (
  request: Request,
  response: Response
) => {
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
