import { OrderType } from "../../common/orderType";
import "./OrderList.css";

type Prop = {
  order: OrderType;
};

export default function OrderList({ order }: Prop) {
  return (
    <div className="order-comp">
      <div className="order-list">
        <div className="order1">
          <p>Order Id:{order._id} </p>
          {/* <p> Shipping Address {order.shippingAddress} </p> */}
          <p> Date {order.date.slice(0, 10)} </p>
        </div>

        <div>
          <div className="order2">
            <h4>Price</h4>
            <h4>Category</h4>
            <h4>Quantity</h4>
          </div>
          {order.productOrder.map((item) => (
            <div className="order3" key={item._id}>
              <p>{item.productName}</p>
              <p> {item.category}</p>
              <p> {item.quantity}</p>
            </div>
          ))}
        </div>
        <div className="total">Total:{order.totalPrice} </div>
      </div>
    </div>
  );
}
