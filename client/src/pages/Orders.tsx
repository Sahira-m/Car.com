import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState, AppDispatch } from "../redux/store";
import { OrderThunk, getAllOrderThunk } from "../redux/thunks/order";
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
    // if ((userDetails.userData.email = "Admin@gmail.com")) {
    // dispatch(getAllOrderThunk);
    // } else {
    dispatch(OrderThunk(userDetails.userData._id));
    //}
  }, [userDetails.userData._id]);

  return (
    <div className="order">
      <p>order details</p>
      {orderList ? (
        orderList.map((order, id) => <OrderList order={order} key={id} />)
      ) : (
        <div> You don't have orders</div>
      )}
    </div>
  );
}
