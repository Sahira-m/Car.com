import { createSlice } from "@reduxjs/toolkit";
import { OrderType } from "../../common/orderType";

type InitialType = {
  order: OrderType[];
  allOrder: OrderType[];
};
const initialState: InitialType = {
  order: [],
  allOrder: [],
};

const orderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {
    getOrderDetails: (state, action) => {
      state.order = action.payload;
      console.log("get1", action.payload);
    },
    getOrderAllDetails: (state, action) => {
      state.allOrder = action.payload;
      console.log("get2", action.payload);
    },
  },
});

export const orderActions = orderSlice.actions;
export default orderSlice.reducer;
