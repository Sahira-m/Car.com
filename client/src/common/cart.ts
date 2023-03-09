export type Cart = {
  userId: string;
  address: {
    city: string;
    country: string;
    houseNumber: string;
    street: string;
    userName: string;
    zip: string;
  }[];
  orders: {
    image: string;
    name: string;
    price: number;
    productId: string;
    quantity: number;
  }[];
  total: number;
};
