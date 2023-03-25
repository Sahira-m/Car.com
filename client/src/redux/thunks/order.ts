import { AppDispatch } from "../store";
import { orderActions } from "../slices/order";
import { port } from "../../common/port";
import axios from "axios";

const Port = port;

export function OrderThunk(userId: string | undefined) {
  const token = localStorage.getItem("userToken");

  const config = { headers: { Authorization: `Bearer ${token}` } };
  const url = `http://localhost:${Port}/orders/${userId}`;

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

export function getAllOrderThunk() {
  const url = `http://localhost:${Port}/orders`;

  return async (dispatch: AppDispatch) => {
    try {
      await axios.get(url).then((res) => {
        dispatch(orderActions.getOrderAllDetails(res.data));
      });
    } catch (error) {
      console.log(error);
    }
  };
}
