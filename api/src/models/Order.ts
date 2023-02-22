import mongoose, { Document } from "mongoose";
import { ProductDocument } from "./Product";
import User from "./User";
import Product from "./Product";
import { ProdcutSchema } from "./Product";

export type OrderDocument = Document & {
  date: Date;
  userId: string;
  //productOrder: [];
  productId: [{ productId: string; quantity: number }];
  //quantity: number;
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
  /* productOrder: [{ type: ProdcutSchema }], */
  productId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: Product,
  },

  quantity: { type: Number },
});

export default mongoose.model<OrderDocument>("Order", OrderSchema);
