// order services here
import mongoose from "mongoose";
import Order, { OrderDocument } from "../models/Order";

const createOrder = async (order: OrderDocument): Promise<OrderDocument> => {
  return order.save();
};

const getOrderByID = async (
  Id: mongoose.ObjectId
): Promise<OrderDocument[] | null> => {
  console.log(Id, "IIIIID");

  return Order.find({ userId: Id });
  // return Order.find()({ userId:${userId}  });
};

/* const getOrderListByUserId = async (
  userId: string
): Promise<OrderDocument[]> => {
  return Order.find({ userId: userId });
}; */
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
};
