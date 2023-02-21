import { Request, Response } from "Express";
import Order from "../models/Order";
import OrderService from "../services/order";
export const makeNewOrder = async (request: Request, response: Response) => {
  try {
    const newUser = new Order({
      date: request.body.date,
      userId: request.body.userId,
      productOrder: request.body.productList,
    });
    const newUsers = await OrderService.createOrder(newUser);
    response.json(newUsers);
  } catch (error) {
    console.log(error);
  }
};

export const getAllOrder = async (request: Request, response: Response) => {
  try {
    const getAlls = await OrderService.getAllOrder();
    response.json(getAlls);
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
    const getProdctById = await OrderService.getOrderByID(
      request.params.userId
    );
    if (getProdctById) {
      const deleteProdct = await OrderService.deleteOrderById(
        request.params.userId
      );

      const getUser = await OrderService.getAllOrder();
      response.status(200).json(getUser);
    } else response.json("The id doesn't exist");
  } catch (error) {
    console.log(error);
  }
};
