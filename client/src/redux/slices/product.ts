//  product slice here
import { createSlice } from "@reduxjs/toolkit";
import { ProductType } from "../../common/productType";

type stateType = {
  productList: ProductType[];
  loading: boolean;
  favouriteList: ProductType[];
  cartList: ProductType[];
  productDetail: ProductType;
  productListFilter: ProductType[];
};
const initialState: stateType = {
  productList: [],
  loading: false,
  favouriteList: [],
  cartList: [],
  productDetail: {
    _id: "",
    productName: "",
    price: 0,
    inStock: true,

    color: "",
    category: "",
    quantity: 1,
    image: "",
  },
  productListFilter: [],
};
const favouriteItems =
  localStorage.getItem("favorites") !== null
    ? JSON.parse(localStorage.getItem("favorites") as string)
    : [];

const cartItems =
  localStorage.getItem("cart") !== null
    ? JSON.parse(localStorage.getItem("cart") as string)
    : [];
const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    //Loading
    getProductRequst: (state) => {
      state.loading = true;
    },
    //get product data
    getProductData: (state, action) => {
      state.productList = action.payload;
      console.log("get product  data", state.productList);
      state.loading = false;
    },
    getProductFilterData: (state, action) => {
      state.productListFilter = action.payload;
      console.log("get product filter data", state.productListFilter);
      state.loading = false;
    },
    getProductDetails: (state, action) => {
      state.productDetail = action.payload;
    },
    addToFavorite: (state, action) => {
      const index = state.favouriteList.findIndex(
        (item) => item._id === action.payload._id
      );
      if (index === -1) {
        state.favouriteList.push(action.payload);
        localStorage.setItem(
          "favorites",
          JSON.stringify(state.favouriteList.map((item) => item))
        );
      }
    },
    removeFromFavorite: (state, action) => {
      const index = state.favouriteList.findIndex(
        (item) => item._id === action.payload._id
      );
      index >= 0 && state.favouriteList.splice(index, 1);
      localStorage.setItem(
        "favorites",
        JSON.stringify(state.favouriteList.map((item) => item))
      );
    },
  },
});

export const productActions = productSlice.actions;
const reducer = productSlice.reducer;
export default reducer;
