// order services here
import Order, { OrderDocument } from "../models/Order";

const createOrder = async (order: OrderDocument): Promise<OrderDocument> => {
  return order.save();
};

const getAllOrder = async (): Promise<OrderDocument[]> => {
  return Order.find();
};
const getOrderByID = async (Id: string): Promise<OrderDocument | null> => {
  return Order.findById(Id);
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
  getAllOrder,
  getOrderByID,
};
