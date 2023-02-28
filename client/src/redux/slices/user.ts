import { createSlice } from "@reduxjs/toolkit";
import { UserType } from "../../common/userType";

type InitialType = { user: UserType; isLogin: boolean; isRegister: boolean };

const initialState: InitialType = {
  user: { name: "", password: "", email: "" },
  isLogin: false,
  isRegister: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    getUser: (state, action) => {
      state.user = action.payload;
      console.log("action is", action.payload);
      console.log("state is", state.user);
    },
    loginHandler: (state, action) => {
      state.isLogin = action.payload;
    },
    registerUser: (state, action) => {
      state.isRegister = action.payload;
    },
  },
});
export const userActions = userSlice.actions;
export default userSlice.reducer;
