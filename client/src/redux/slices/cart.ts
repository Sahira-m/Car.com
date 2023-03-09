//  product slice here
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ProductType } from "../../common/productType";

/* const favouriteItems =
  localStorage.getItem("favorites") !== null
    ? JSON.parse(localStorage.getItem("favorites") as string)
    : []; */

const cartItems =
  localStorage.getItem("cart") !== null
    ? JSON.parse(localStorage.getItem("cart") as string)
    : [];

type InitialType = {
  products: ProductType[];
  carts: ProductType[];
  totalPrice: number;
};
const initialState: InitialType = {
  products: [],
  carts: cartItems,
  totalPrice: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action: PayloadAction<ProductType>) {
      //console.log("inside thunk", action.payload);
      const index = state.carts.findIndex(
        (item) => item._id === action.payload._id
      );

      if (index === -1) {
        //action.payload.quantity = 1;
        state.carts.push(action.payload);
        // console.log("inside thunk", action.payload);
        localStorage.setItem("cart", JSON.stringify(state.carts));
      } else {
        state.carts[index].quantity++;
        const cart = JSON.parse(localStorage.getItem("cart") as string);
        cart[index].quantity = state.carts[index].quantity;
        localStorage.setItem("cart", JSON.stringify(state.carts));
        // console.log("inside thunk", action.payload);
      }
    },
    getAllFromCart: (state, action) => {
      state.carts = action.payload;
    },
    removeFromCart: (state, action) => {
      const index = state.carts.findIndex(
        (item) => item._id === action.payload._id
      );
      if (state.carts[index].quantity === 1 && index >= 0) {
        state.carts.splice(index, 1);
        localStorage.setItem(
          "cart",
          JSON.stringify(state.carts.map((item) => item))
        );
      } else {
        state.carts[index].quantity--;
        const cart = JSON.parse(localStorage.getItem("cart") as string);
        cart[index].quantity = state.carts[index].quantity;
        localStorage.setItem(
          "cart",
          JSON.stringify(state.carts.map((item) => item))
        );
      }
    },
    removeAll: (state, action) => {
      const index = state.carts.findIndex(
        (item) => item._id === action.payload._id
      );
      index >= 0 && state.carts.splice(index, 1);
    },
    removeCompleteFromCart: (state, action) => {
      state.carts.splice(0, action.payload);
      console.log("inside cart slice", state.carts);
      localStorage.setItem("cart", JSON.stringify(state.carts));
    },
    totalPrice: (state) => {
      state.totalPrice = state.carts.reduce((acc, curr) => {
        return acc + curr.quantity * curr.price;
      }, 0);
      localStorage.setItem("totalPrice", JSON.stringify(state.totalPrice));
    },
  },
});

export const cartActions = cartSlice.actions;
export default cartSlice.reducer;
