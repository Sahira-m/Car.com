// product model here
import mongoose from "mongoose";
import moongose, { Document } from "mongoose";

export type ProductDocument = Document & {
  productName: string;
  price: number;
  inStock: boolean;
  color: string;
  category: string;
  quantity: number;
  image: String;
};
export const ProdcutSchema = new moongose.Schema({
  productName: {
    type: String,
    unique: true,
    require: true,
  },
  price: {
    type: Number,
    default: 100,
  },
  inStock: {
    type: Boolean,
    default: true,
  },
  color: String,
  category: String,
  quantity: Number,
  image: String,
});
export default mongoose.model<ProductDocument>("Product", ProdcutSchema);
