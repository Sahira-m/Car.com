/* export type OrderType = {
  date: Date;
  userId: string;
  productOrder: [];
  shippingAddress: string;
  isDelivered: boolean;
  totalPrice: number;
};
export type OrderTypes = {}; */
/*export type OrderType = {
  _id: string;
  date: Date;
  userId: string;
  productOrder: [];
  shippingAddress: string;
  isDelivered: boolean;
  totalPrice: number;
}[];

*/
export type OrderType = {
  userId: string;
  productOrder: {
    productName: string;
    category: string;
    price: number;
    description: string;
    quantity: number;
    image: string;
    rating: number;
    _id: string;
  }[];
  date: string;
  shippingAddress: string;
  totalPrice: number;
  _id: string;
};
