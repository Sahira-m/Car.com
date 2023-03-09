import { AppDispatch } from "../store";
import { orderActions } from "../slices/order";
import { port } from "../../common/port";
import axios from "axios";

const Port = port;

export function OrderThunk(userId: string | undefined) {
  const token = localStorage.getItem("userToken");

  const config = { headers: { Authorization: `Bearer ${token}` } };
  const url = `http://localhost:${Port}/orders/${userId}`;
  console.log("pody url", url);
  return async (dispatch: AppDispatch) => {
    try {
      await axios.get(url, config).then((res) => {
        dispatch(orderActions.getOrderDetails(res.data));
      });
    } catch (error) {
      console.log(error);
    }
  };
}

export function getAllOrderThunk() {
  const url = `http://localhost:${Port}/orders`;
  console.log("new url", url);
  return async (dispatch: AppDispatch) => {
    try {
      await axios.get(url).then((res) => {
        dispatch(orderActions.getOrderDetails(res.data));
      });
    } catch (error) {
      console.log(error);
    }
  };
}
