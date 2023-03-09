import { AppDispatch } from "../store";
import { orderActions } from "../slices/order";
import { port } from "../../common/port";
import axios from "axios";

const Port = port;

export function OrderThunk(userId: string | undefined) {
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
