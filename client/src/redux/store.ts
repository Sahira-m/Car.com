// store here
import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./slices/product";
import userReducer from "./slices/user";
import cartReducer from "./slices/cart";
import orderReducer from "./slices/order";
import searchReducer from "./slices/search";
const store = configureStore({
  reducer: {
    product: productReducer,
    user: userReducer,
    cart: cartReducer,
    order: orderReducer,
    search: searchReducer,
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
