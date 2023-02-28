// store here
import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./slices/product";
import userReducer from "./slices/user";
const store = configureStore({
  reducer: {
    product: productReducer,
    user: userReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
export type RootState = ReturnType<typeof store.getState>;
export default store;
// type Appdispatch from redux toolkit
export type AppDispatch = typeof store.dispatch;
