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

  const userDetails = useSelector((state: RootState) => state.user.user);
  let orderList;

  if (userDetails.email == "Admin@gmail.com") {
    orderList = orderList2;
  } else {
    orderList = orderList1;
  }
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(getAllOrderThunk());
    dispatch(OrderThunk(userDetails._id));
  }, [userDetails.email]);
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
