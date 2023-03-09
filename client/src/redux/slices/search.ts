import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userInput: "",
};

const searchSlice = createSlice({
  name: "searchProducts",
  initialState,
  reducers: {
    getUserInput: (state, action) => {
      state.userInput = action.payload;
      console.log("user input is", state.userInput);
    },
  },
});

export const searchActions = searchSlice.actions;
export default searchSlice.reducer;
