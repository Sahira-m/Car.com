// order services here
import mongoose from "mongoose";
import Order, { OrderDocument } from "../models/Order";

const createOrder = async (order: OrderDocument): Promise<OrderDocument> => {
  return order.save();
};

const getOrderByID = async (Id: string): Promise<OrderDocument[] | null> => {
  return Order.find({ userId: Id });
};
//for admin only
const getOrderAll = async (): Promise<OrderDocument[] | null> => {
  const allOrder = Order.find();
  return allOrder;
};

const deleteOrderById = async (id: string): Promise<OrderDocument | null> => {
  return Order.findByIdAndDelete(id);
};

const updateOrder = async (
  pid: string,
  product: Partial<OrderDocument>
): Promise<OrderDocument | null> => {
  return Order.findByIdAndUpdate(pid, product, { new: true });
};

export default {
  createOrder,
  updateOrder,
  deleteOrderById,
  getOrderByID,
  getOrderAll,
};
