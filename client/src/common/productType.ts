export type ProductType = {
  // _id: mongoose.Schema.Types.ObjectId,
  _id: string;
  productName: string;
  price: number;
  inStock: boolean;
  color: string;
  category: string;
  quantity: number;
  image: string;
};
