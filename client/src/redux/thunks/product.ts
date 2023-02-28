// product thunk here

import { AppDispatch } from "../store";
import { productActions } from "../slices/product";
import { port } from "../../common/port";
const Port = port;
const url = `http://localhost:${Port}/products`;
export function fetchProducts() {
  return async (dispatch: AppDispatch) => {
    try {
      dispatch(productActions.getProductRequst);
      setTimeout(async () => {
        const response = await fetch(url);
        const productDetails = await response.json();
        dispatch(productActions.getProductData(productDetails));
      }, 1000);
    } catch (error) {
      console.log(error);
    }
  };
}
