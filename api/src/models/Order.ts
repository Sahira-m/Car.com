import mongoose, { Document } from "mongoose";
import { ProductDocument } from "./Product";
import User from "./User";
import Product from "./Product";
import { ProdcutSchema } from "./Product";

export type OrderDocument = Document & {
  /*date: Date;
  userId: string;
  productOrder: [];
 // order: [{ productId: string; quantity: number }];
  //new
  address: [];
  total: number;
  isDelivered: string;*/
  // _id: string;
  date: Date;
  userId: string;
  productOrder: [];
  shippingAddress: string;
  isDelivered: boolean;
  totalPrice: number;
};
const OrderSchema = new mongoose.Schema({
  /* date: {
    type: String,
    default: Date.now(),
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: User,
  },
  /* productOrder: [{ type: ProdcutSchema }], 
  order: [
    {
      productId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: Product,
      },

      quantity: {
        type: Number,
        default: 1,
      },
      //new line
    },
  ],
  address: String,
  total: Number,
  isDelivered: String, */
  //_id: { type: mongoose.Schema.Types.ObjectId },
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
