/* import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { AppDispatch, RootState } from "../../redux/store";

import { OrderThunk } from "../../redux/thunks/order";
import {
  Table,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TableBody,
  Paper,
  IconButton,
  Tooltip,
  Button,
  Alert,
  Snackbar,
  styled,
} from "@mui/material";
import { OrderType } from "../../common/orderType";
import OrderItem from "./OrderItem";
import { useEffect } from "react";
import Orders from "../../pages/Orders";
import { date } from "yup";
export default function OrderList() {



  /*  let userId: string;
  if (localStorage.getItem("userIdnew"))
    userId = localStorage.getItem("userIdnew")
  else
    userId="63ff43b399a2bdb3e74c3a73"; */
//const userId = localStorage.getItem("userIdnew")?localStorage.getItem("userIdnew"):localStorage.getItem("userIdnew");
//const userId1 = "63ff43b399a2bdb3e74c3a73";

/*useEffect(() => {
    dispatch(OrderThunk(userDetails.userData._id));
  });*/
/*const orderFinal: OrderType[] = useSelector(
    (state: RootState) => state.order.order
  );
  const islogin = useSelector((state: RootState) => state.user.isLogin);
  console.log("order in component final ", orderFinal);
  //let orderDetails = localStorage.getItem("orderDetails");
  //manisha night code
  /* const orderDetails =
    localStorage.getItem("orderDetails") !== null
      ? JSON.parse(localStorage.getItem("orderDetails")!)
      : null;
  console.log(orderDetails, "order details lastttttttt"); */
/*const userDetails =
    localStorage.getItem("user") !== null
      ? JSON.parse(localStorage.getItem("user")!)
      : null;

  // console.log("order is in orderpage", orders);
  console.log("uiiiid", userDetails.userData._id);
  /*const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    //if (islogin) {
    OrderThunk(userDetails.userData._id);
    //}
  }, [userDetails.userData._id]);*/
/*const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    dispatch(OrderThunk(userDetails.userData._id));
  }, [userDetails.userData._id]);
  console.log("order final", orderFinal);

  return (
    <div className="order-list">
      {
        orderFinal.map((item: OrderType) => {
          <div>
        
      </div>})
        
       
      }
      </div>
      );
    }
*/

import { OrderType } from "../../common/orderType";
import "./OrderList.css";

// type
type Prop = {
  order: OrderType;
};

export default function OrderList({ order }: Prop) {
  return (
    <div className="order-comp">
      <div className="order-list">
        <div className="order1">
          <p> ID:{order._id} </p>
          <p> Shipping Address {order.shippingAddress} </p>
          <p> Date {order.date} </p>
        </div>

        <div>
          <p>order details</p>
          <div className="order2">
            <h4>Price</h4>
            <h4>Category</h4>
            <h4>Quantity</h4>
          </div>
          {order.productOrder.map((item) => (
            <div className="order3">
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
  /*  return (
    <div className="order-container">
      <div className="paper-wrapper">
        <Paper sx={{ width: 600, height: 400 }}>
          <div className="order-logo">
            <div className="logo-container">
              <IconButton sx={{ color: "inherit" }}>
                <StarBorderIcon sx={{ fontSize: "50px", size: "small" }} />
              </IconButton>
              <Typography
                variant="h6"
                noWrap
                component="div"
                sx={{ fontSize: "25px", display: { xs: "none", sm: "block" } }}>
                <Box component="span" sx={{ color: "darkblue" }}>
                  C
                </Box>
                ar's e
                <Box component="span" sx={{ color: "darkblue" }}>
                  S
                </Box>
                hop
              </Typography>
            </div>
            <div className="logo-text">
              <Typography component="div">
                <Box component="span" sx={{ fontWeight: "bold" }}>
                  CVR no:
                </Box>
                DK43567889
              </Typography>
              <Typography component="div">Copenhagen</Typography>
              <Typography component="div">Denmark</Typography>
            </div>
          </div>
          <Typography
            sx={{
              textAlign: "center",
              fontSize: "20px",
              fontFamily: "bold",
              mt: 4,
              backgroundColor: "aliceblue",
            }}>
            Order Detail
          </Typography>
          <Divider></Divider>
          <Typography sx={{ fontSize: "14px" }}>
            <Box component="span" sx={{ m: 2, fontWeight: "bold" }}>
              Date:
            </Box>
            {order.date.toLocaleString()}
           
          </Typography>
          <Typography sx={{ fontSize: "14px" }}>
            <Box component="span" sx={{ m: 2, fontWeight: "bold" }}>
              email:
            </Box>
            {order.date}
          </Typography>

          <Divider></Divider>
          <Typography
            textAlign="center"
            sx={{ backgroundColor: "aliceblue", fontSize: "16px" }}>
            Shipping Address
          </Typography>
          <Divider></Divider>

          <Typography component="div" sx={{ fontSize: "14px" }}>
            <Box component="span" sx={{ m: 2, fontWeight: "bold" }}>
              Shipping address
            </Box>
            {order.shippingAddress}
          </Typography>
        </Paper>
      </div>
      <div className="table-container">
        <TableContainer component={Paper} sx={{ width: 600 }}>
          <Table sx={{ minWidth: 400 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell align="left">orderID</TableCell>
                <TableCell align="left">Make</TableCell>
                <TableCell align="left">Quantity</TableCell>
                <TableCell align="left">Price</TableCell>
                <TableCell></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {/*  {order.productOrder.map((product) => (
                <OrderItem key={product._id} product={product} />
              ))} 

              {order.productOrder.map((order) => (
                <div className="productsDetail" key={order._id}>
                  <img src={`${order.image}`} alt={`${order.name}`} />
                  <p className="productDetsilname">{order.name.slice(0, 10)}</p>
                  <p>{order.category}</p>
                  <p>{}</p>
                </div>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
      <div className="total-price">
        <Typography component="div" sx={{ mt: 2, fontFamily: "bold" }}>
          <Box component="span" sx={{ m: 2, fontWeight: "bold" }}>
            Total Price:
          </Box>
          ${order.totalPrice}
        </Typography>
      </div>
    </div>
  ); */
}
