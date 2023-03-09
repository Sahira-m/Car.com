import { Request, Response } from "Express";
import User from "../models/User";
import UserService from "../services/users";
import jwt from "jsonwebtoken";
// dotenv import
import dotenv from "dotenv";
//hash code
import bcrypt from "bcrypt";
const saltRounds = 10;
export const makeNewUser = async (request: Request, response: Response) => {
  try {
    //new code for encode password
    const { name, email, password } = request.body;

    //const saltRounds = 10;
    const hashPassword = await bcrypt.hash(password, saltRounds);
    //3 line of code above for hash password
    const newUser = new User({
      name: name,
      email: email,
      password: hashPassword,
    });

    //new code for checking the user exist or not by using email
    const isEmailExist = await UserService.getUserByEmail(request.body.email);
    if (isEmailExist) {
      response
        .status(400)
        .json(`The email already ${request.body.email} exist`);
      return;
    }

    const newUsers = await UserService.createUser(newUser);

    response.status(200).json({
      data: newUsers,
      success: true,
      message: "newUser created",
    });
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
      response.status(401).json({
        massage: `The email ${request.body.email} doesn't exist`,
      });
      return;
    }
    //Decrypt Hash password
    const databasePassword = userData.password;
    const inputPassword = request.body.password;
    const match = await bcrypt.compare(inputPassword, databasePassword);
    if (!match) {
      response.json("The password does not exist!");
      return;
    }
    //TOKEN
    const token = jwt.sign(
      { email: request.body.email, id: userData._id },
      JWT_SECRET,
      { expiresIn: "1h" }
    );
    response.status(200).json({ userData, token });
  } catch (error) {
    console.log(error);
  }
};

export const updateUserById = async (request: Request, response: Response) => {
  try {
    console.log("iam h ere1");
    //new code for encode password
    const { name, email, password } = request.body;
    console.log("update user2", request.body);
    const hashPassword = await bcrypt.hash(password, saltRounds);
    request.body.password = hashPassword;
    console.log("update user3", request.body);
    const update = await UserService.updateByEmail(
      request.params.userId,
      request.body
    );
    //console.log("update user", updateUser);
    console.log("req user", request.body);
    // response.json(update);
    response.status(200).json({
      data: update,
      success: true,
      message: "Updated Successfully",
    });
  } catch (error) {
    console.log(error);
  }
};
