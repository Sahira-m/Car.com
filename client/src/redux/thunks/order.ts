import { AppDispatch } from "../store";
import { orderActions } from "../slices/order";
import { port } from "../../common/port";
import axios from "axios";

export function OrderThunk(userId: string | undefined, token: string) {
  const config = { headers: { Authorization: `Bearer ${token}` } };
  const url = `http://localhost:${port}/orders/${userId}`;
  console.log("url+config", url, token);
  return async (dispatch: AppDispatch) => {
    try {
      await axios
        .get(url, { headers: { Authorization: `Bearer ${token}` } })
        .then((res) => {
          dispatch(orderActions.getOrderDetails(res.data));
        });
    } catch (error) {
      console.log(error);
    }
  };
}

export function getAllOrderThunk() {
  const url = `http://localhost:${port}/orders`;
  const token = localStorage.getItem("userToken");

  const config = { headers: { Authorization: `Bearer ${token}` } };
  return async (dispatch: AppDispatch) => {
    try {
      await axios.get(url, config).then((res) => {
        dispatch(orderActions.getOrderAllDetails(res.data));
      });
    } catch (error) {
      console.log(error);
    }
  };
}
