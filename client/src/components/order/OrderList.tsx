import { OrderType } from "../../common/orderType";
import "./OrderList.css";
import { Typography } from "@mui/material";
import { Box } from "@mui/material";
type Prop = {
  order: OrderType;
};

export default function OrderList({ order }: Prop) {
  return (
    <div className="order">
      <Box
        sx={{
          width: 280,
          my: 5,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          boxShadow: "0 0 20px #E0E0E0",
        }}>
        <h3>orderList</h3>
        <Typography className="text-container">
          <strong> OrderId:</strong>
          {order._id}
        </Typography>
        <Typography>
          <strong> Date:</strong>
          {order.date.slice(0, 10)}
        </Typography>
        <Typography className="text-container">
          <strong> UserId:</strong>
          {order.userId}
        </Typography>
        <Typography>
          <strong> ProductDetails:</strong>
          {order.productOrder.map((order) => (
            <div className="productsDetail" key={order._id}>
              <p className="productDetsilname">
                <strong> Name:</strong>
                {order.productName.slice(0, 10)}
              </p>
              <strong> Quantity:</strong>
              {order.quantity}
            </div>
          ))}
          <Typography>
            <strong> TotalPrice:</strong>
            {order.totalPrice}
          </Typography>
        </Typography>
        {/* <Typography className="text-container">
              <strong> Email:</strong>
              <Box className="box2">{userDetails.getUser.email}</Box>
            </Typography> */}
      </Box>
    </div>
  );
}
