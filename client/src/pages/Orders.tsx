import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState, AppDispatch } from "../redux/store";
import { OrderThunk, getAllOrderThunk } from "../redux/thunks/order";
import OrderList from "../components/order/OrderList";
export default function OrderPage() {
  // state

  const orderList1 = useSelector((state: RootState) => state.order.order);
  const orderList2 = useSelector((state: RootState) => state.order.allOrder);
  console.log("1,", orderList1);
  console.log("2,", orderList2);
  let orderList;
  const userDetails =
    localStorage.getItem("user") !== null
      ? JSON.parse(localStorage.getItem("user")!)
      : null;
  if (userDetails.userData.email == "Admin@gmail.com") {
    orderList = orderList2;
  } else {
    orderList = orderList1;
  }
  const dispatch = useDispatch<AppDispatch>();

  /*  useEffect(() => {
    if ((userDetails.userData.email = "Admin")) {
      console.log("in orders", userDetails.userData.email);
      dispatch(getAllOrderThunk);
    } else {
      console.log("in orders else", userDetails.userData.email);
      dispatch(OrderThunk(userDetails.userData._id));
      dispatch(getAllOrderThunk);
    }
  }, [userDetails.userData.email]); */
  useEffect(() => {
    dispatch(getAllOrderThunk());
    dispatch(OrderThunk(userDetails.userData._id));
  }, [userDetails.userData.email]);
  return (
    <div className="order">
      {orderList.length > 0 ? (
        orderList.map((order, id) => <OrderList order={order} key={id} />)
      ) : (
        <div className="alert-message"> You don't have orders</div>
      )}
    </div>
  );
}
