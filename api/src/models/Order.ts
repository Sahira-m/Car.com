import mongoose, { Document } from "mongoose";
import { ProductDocument } from "./Product";
import User from "./User";
import { ProdcutSchema } from "./Product";

export type OrderDocument = Document & {
  date: Date;
  userId: string;
  productOrder: [];
};
const OrderSchema = new mongoose.Schema({
  date: {
    type: String,
    default: Date.now(),
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: User,
  },
  productOrder: [{ type: ProdcutSchema }],
});

export default mongoose.model<OrderDocument>("Order", OrderSchema);
