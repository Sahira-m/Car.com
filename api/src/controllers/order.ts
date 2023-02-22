import { Request, Response } from "Express";
import Order from "../models/Order";
import OrderService from "../services/order";
export const makeNewOrder = async (request: Request, response: Response) => {
  try {
    const newUser = new Order({
      date: request.body.date,
      userId: request.params.userId,
      productOrder: request.body.productOrder,
      quantity: request.body.quantity,
    });
    const newUsers = await OrderService.createOrder(newUser);
    response.json(newUsers);
  } catch (error) {
    console.log(error);
  }
};

export const getOrderByid = async (request: Request, response: Response) => {
  try {
    const getAlls = await OrderService.getOrderByID(request.params.userId);
    response.json(getAlls);
  } catch (error) {
    console.log(error);
  }
};

export const deleteOrderById = async (request: Request, response: Response) => {
  try {
    const getOrderByID = await OrderService.getOrderByID(request.params.userId);
    if (getOrderByID) {
      const deleteProdct = await OrderService.deleteOrderById(
        request.params.userId
      );

      response.status(200).json(getOrderByID);
    } else response.json("The id doesn't exist");
  } catch (error) {
    console.log(error);
  }
};
