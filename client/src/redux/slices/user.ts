import { createSlice } from "@reduxjs/toolkit";
import { UserType } from "../../common/userType";
import { OrderType } from "../../common/orderType";

type InitialType = {
  user: UserType;
  isLogin: boolean;
  isRegister: boolean;
  order: OrderType[];
  isUpdate: boolean;
};

const initialState: InitialType = {
  user: { name: "", password: "", email: "", _id: "" },
  isLogin: false,
  isRegister: false,
  order: [],
  isUpdate: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    getUser: (state, action) => {
      state.user = action.payload;
      localStorage.setItem("userId", action.payload._id);
    },
    loginHandler: (state, action) => {
      state.isLogin = action.payload;
    },
    registerUser: (state, action) => {
      state.isRegister = action.payload;
    },
    updateUser: (state, action) => {
      state.isUpdate = action.payload;
    },
  },
});
export const userActions = userSlice.actions;
export default userSlice.reducer;
