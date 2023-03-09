import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState, AppDispatch } from "../redux/store";
import { OrderThunk } from "../redux/thunks/order";
import OrderList from "../components/order/OrderList";
export default function OrderPage() {
  // state
  const orderList = useSelector((state: RootState) => state.order.order);

  const userDetails =
    localStorage.getItem("user") !== null
      ? JSON.parse(localStorage.getItem("user")!)
      : null;

  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    dispatch(OrderThunk(userDetails.userData._id));
  }, [userDetails.userData._id]);

  return (
    <div className="order">
      {orderList.map((order, id) => (
        <OrderList order={order} key={id} />
      ))}
    </div>
  );
}
