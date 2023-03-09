import React from "react";
import {
  Button,
  IconButton,
  TableBody,
  TableCell,
  TableRow,
  Tooltip,
} from "@mui/material";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import { ProductType } from "../../common/productType";
import { useDispatch } from "react-redux";
//import { productActions } from "../../redux/slices/product";
import { cartActions } from "../../redux/slices/cart";
import "./CartItem.css";
type PropType = {
  cart: ProductType;
};
export default function CartItem({ cart }: PropType) {
  const dispatch = useDispatch();
  return (
    <TableBody className="cart-item">
      <TableRow
        key={cart._id}
        sx={{
          "&:last-child td, &:last-child th": {
            borderBottom: "1px solid lightgrey",
          },
          bgColor: "none",
        }}>
        <TableCell component="th" scope="row" align="center">
          <img src={cart.image} alt={cart.productName} />
        </TableCell>
        <TableCell align="center">{cart.productName.slice(0, 20)}</TableCell>
        <TableCell align="center">
          ${(cart.price * cart.quantity).toFixed(2)}
        </TableCell>
        <TableCell align="center">
          <Button
            variant="outlined"
            onClick={() => dispatch(cartActions.removeFromCart(cart))}
            size="small">
            -
          </Button>
          <span style={{ marginInline: "10px" }}>{cart.quantity}</span>
          <Button
            variant="outlined"
            onClick={() => dispatch(cartActions.addToCart(cart))}
            size="small">
            +
          </Button>
        </TableCell>
        <TableCell align="center">
          <Tooltip title="Remove from cart">
            <IconButton onClick={() => dispatch(cartActions.removeAll(cart))}>
              <HighlightOffIcon />
            </IconButton>
          </Tooltip>
        </TableCell>
      </TableRow>
    </TableBody>
  );
}
