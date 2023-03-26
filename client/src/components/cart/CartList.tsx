import {
  Table,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  IconButton,
  Tooltip,
  Button,
  Alert,
  Snackbar,
} from "@mui/material";
import AddShoppingCartOutlinedIcon from "@mui/icons-material/AddShoppingCartOutlined";
import CartItem from "./CartItem";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { RootState } from "../../redux/store";
import { ProductType } from "../../common/productType";
import "./CartList.css";
import axios from "axios";
import { cartActions } from "../../redux/slices/cart";
import { port } from "../../common/port";

/* function createData(
  _id: string,
  productName: string,
  price: number,
  inStock: boolean,
  color: string,
  category: string,
  quantity: number,
  image: string
) {
  return {
    _id,
    productName,
    price,
    inStock,
    color,
    category,
    quantity,
    image,
  };
} */
export default function CartList() {
  const [open, setOpen] = useState(false);
  const [ordered, setorder] = useState(false);

  const handleClose = (
    event?: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  const handleClick = () => {
    setOpen(true);
    //dispatch(cartActions.removeCompleteFromCart);
  };
  //const user = useSelector((state: RootState) => state.user.user);

  //console.log("cart listsssssssss in cart", cartList1);
  //console.log("user in IDDD", user);

  const cartLists =
    localStorage.getItem("cart") !== null
      ? JSON.parse(localStorage.getItem("cart")!)
      : null;
  const newCartList = useSelector((state: RootState) => state.cart.carts);
  console.log("before check out length", newCartList.length);
  const totalPrice = useSelector((state: RootState) => state.cart.totalPrice);
  const islogin = useSelector((state: RootState) => state.user.isLogin);
  const userDetails = useSelector((state: RootState) => state.user.user);
  const token = useSelector((state: RootState) => state.user.token);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(cartActions.totalPrice());

    if (!islogin) {
      setorder(true);
    } else {
      setorder(false);
    }
  });

  const checkOut = () => {
    try {
      if (islogin) {
        const config = { headers: { Authorization: `Bearer ${token}` } };
        const url = `http://localhost:${port}/orders/${userDetails._id}`;
        const totalPrice = Number(localStorage.getItem("totalPrice"));
        const order = {
          productOrder: cartLists,
          totalPrice: totalPrice.toFixed(2),
        };

        newCartList.length !== 0 &&
          axios.post(url, order, config).then((res) => {
            //localStorage.setItem("orderDetails", JSON.stringify(res.data));
            console.log(res.data, "order resdata");
          });
        //new code
        handleClick();
        setorder(true);

        console.log("after check out", newCartList);
        dispatch(cartActions.removeCompleteFromCart(newCartList.length));
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="cart-list">
      {newCartList.length === 0 ? (
        <div className="cart-list-warning">
          <Tooltip title="Back to products">
            <Link to="/products">
              <p>Please add product to cart!</p>
            </Link>
          </Tooltip>
        </div>
      ) : (
        <>
          <h3> Cart List</h3>
          <TableContainer component={Paper} style={{ marginTop: "50px" }}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell align="center">
                    <strong>Image</strong>
                  </TableCell>
                  <TableCell align="center">
                    <strong>Title</strong>
                  </TableCell>
                  <TableCell align="center">
                    <strong>Price</strong>
                  </TableCell>
                  <TableCell align="center">
                    <strong>Quantity</strong>
                  </TableCell>
                  <TableCell align="center">
                    <strong>Remove</strong>
                  </TableCell>
                </TableRow>
              </TableHead>
              {newCartList.map((cart: ProductType) => {
                return <CartItem key={cart._id} cart={cart} />;
              })}
            </Table>
          </TableContainer>
          <div className="cart-total">
            <Button
              variant="outlined"
              className="button1"
              type="submit"
              onClick={checkOut}>
              Checkout
            </Button>
            <p>
              <strong style={{ color: "black" }}>Total Price:</strong>
            </p>
            <p>
              <strong style={{ color: "black" }}>
                $ {totalPrice.toFixed(2)}
              </strong>
            </p>
          </div>
        </>
      )}

      <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success" sx={{ width: "100%" }}>
          Ordered Suceessfully!
        </Alert>
      </Snackbar>
      <Snackbar open={ordered} autoHideDuration={3000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success" sx={{ width: "100%" }}>
          Please Login !
        </Alert>
      </Snackbar>
    </div>
  );
}
