import { AppDispatch } from "../store";
import { productActions } from "./../slices/product";
import { port } from "../../common/port";
const Port = port;
export function fetchProductDetail(id: string | undefined) {
  const url = `http://localhost:${Port}/products/${id}`;
  return async (dispatch: AppDispatch) => {
    const response = await fetch(url);
    const data = await response.json();
    console.log("thunk data", data);
    dispatch(productActions.getProductDetails(data));
  };
}
