import { Request, Response } from "Express";
import Order from "../models/Order";
import OrderService from "../services/order";
import User from "../models/User";
import mongoose from "mongoose";
import jwt from "jsonwebtoken";
// dotenv import
import dotenv from "dotenv";
import generateToken from "../../utils/generateToken";
dotenv.config();
const JWT_SECRET = process.env.JWT_SECRET as string;
export const makeNewOrder = async (request: Request, response: Response) => {
  try {
    const { productId, quantity, address, total, isDelivered } = request.body;
    //token
    // const token = generateToken(request.body.email, request.params.userId);
    const users = await User.findById(request.params.userId);

    if (!users) {
      return response.status(404).json("Something went wrong. Did you login?");
    }

    const newOrder = new Order({
      userId: users._id,
      order: [
        {
          productId: productId,
          quantity: quantity,
        },
      ],
      ...request.body,
    });
    const newOrders = await OrderService.createOrder(newOrder);
    response.status(200).json(newOrders);
  } catch (error) {
    console.log(error);
  }
};

export const getOrderByid = async (request: Request, response: Response) => {
  try {
    const userId = request.params.userId as unknown as mongoose.ObjectId;
    //token
    //const token = generateToken(request.body.email, request.params.userId);
    console.log(request.params.userId, "get uid");
    const getAlls = await OrderService.getOrderByID(userId);

    response.json(getAlls);
  } catch (error) {
    console.log(error);
  }
};

export const deleteOrderById = async (request: Request, response: Response) => {
  try {
    const userId = request.params.userId as unknown as mongoose.ObjectId;
    //token
    const token = jwt.sign(
      { email: request.body.email, id: request.params.userId },
      JWT_SECRET,
      { expiresIn: "1h" }
    );
    const getOrderByID = await OrderService.getOrderByID(userId);
    if (getOrderByID) {
      const deleteProdct = await OrderService.deleteOrderById(
        request.params.userId
      );

      response.status(200).json({ getOrderByID, token });
    } else response.json("The id doesn't exist");
  } catch (error) {
    console.log(error);
  }
};

//for admin only
export const getAllOrder = async (request: Request, response: Response) => {
  try {
    const getAlls = await OrderService.getOrderAll();
    console.log(getAlls, "get");
    response.json(getAlls);
  } catch (error) {
    console.log(error);
  }
};
