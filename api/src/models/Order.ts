import mongoose, { Document } from "mongoose";
import User from "./User";
import { ProdcutSchema } from "./Product";

export type OrderDocument = Document & {
  date: Date;
  userId: string;
  productOrder: [];
  shippingAddress: string;
  isDelivered: boolean;
  totalPrice: number;
};
const OrderSchema = new mongoose.Schema({
  date: {
    type: Date,
    default: Date.now(),
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: User,
  },
  productOrder: [{ type: ProdcutSchema }],
  shippingAddress: {
    type: String,
    default: "Stockhlom",
  },
  isDelivered: {
    type: Boolean,
    default: true,
  },
  totalPrice: {
    type: Number,
    default: 0,
  },
});

export default mongoose.model<OrderDocument>("Order", OrderSchema);
