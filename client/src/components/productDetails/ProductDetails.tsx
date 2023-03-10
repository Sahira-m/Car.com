import React from "react";
//type
import { ProductType } from "../../common/productType";
//mui
import {
  Card,
  CardMedia,
  Typography,
  CardContent,
  CardActions,
  Button,
} from "@mui/material";
import "./ProductDetail.css";

//mui

import { Alert, Snackbar } from "@mui/material";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { Link } from "react-router-dom";
import { RootState } from "../../redux/store";
import { useSelector } from "react-redux";
import { cartActions } from "../../redux/slices/cart";
import { productActions } from "../../redux/slices/product";

type PropType = { productDetail: ProductType };

export default function ProductDetails({ productDetail }: PropType) {
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const [openCart, setOpenCart] = useState(false);
  const isAddToFavourite = useSelector(
    (state: RootState) => state.product.isAddToFavourate
  );
  const isAddToCart = useSelector((state: RootState) => state.cart.isAddToCart);
  const handleClick = () => {
    setOpen(true);
  };

  let available = "";
  if (productDetail.inStock === true) available = "Yes";
  else available = "No";
  const handleClose = (
    event?: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  const handleClickCart = () => {
    setOpenCart(true);
  };
  const addToFavourite = () => {
    dispatch(productActions.addToFavorite(productDetail));
    handleClick();
  };
  const handleCloseCart = (
    event?: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }

    setOpenCart(false);
  };

  const addToCart = () => {
    dispatch(cartActions.addToCart(productDetail));
    handleClickCart();
  };
  return (
    <div className="detail">
      <h1> The {productDetail.productName} Details is </h1>
      <Card
        sx={{
          width: 600,
          my: 5,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          boxShadow: "0 0 20px #E0E0E0",
        }}>
        <CardMedia
          sx={{
            height: 300,
            width: "max-width",
            padding: "20px",
            margin: "0 auto",
          }}
          src={productDetail.image}
          component="img"
          title={productDetail.productName}
        />

        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {productDetail.productName}
          </Typography>
          <Typography variant="body1" color="text.secondary">
            ${productDetail.price}
          </Typography>
          <Typography variant="body1" color="text.secondary">
            Quantity:{productDetail.quantity}
          </Typography>
          <Typography variant="body1" color="text.secondary">
            {" "}
            Category:{productDetail.category}
          </Typography>
          <Typography variant="body1" color="text.secondary">
            Color:{productDetail.color}
          </Typography>
          <Typography variant="body1" color="text.secondary">
            Available:{available}
          </Typography>
        </CardContent>
        <CardActions sx={{ display: "flex", justifyContent: "center" }}>
          <Button size="small" onClick={addToCart}>
            Add to cart
          </Button>
          <Button size="small" onClick={addToFavourite}>
            Add to favorite
          </Button>
        </CardActions>
        {isAddToFavourite ? (
          <Snackbar open={open} autoHideDuration={2500} onClose={handleClose}>
            <Alert
              onClose={handleClose}
              severity="success"
              sx={{ width: "100%" }}>
              {productDetail.productName} is added to favorite!
            </Alert>
          </Snackbar>
        ) : (
          <Snackbar open={open} autoHideDuration={2500} onClose={handleClose}>
            <Alert
              onClose={handleClose}
              severity="warning"
              sx={{ width: "100%" }}>
              {productDetail.productName} is already in favorite!
            </Alert>
          </Snackbar>
        )}
        {isAddToCart ? (
          <Snackbar
            open={openCart}
            autoHideDuration={3000}
            onClose={handleCloseCart}>
            <Alert
              onClose={handleCloseCart}
              severity="success"
              sx={{ width: "100%" }}>
              added to cart!
            </Alert>
          </Snackbar>
        ) : (
          <Snackbar
            open={openCart}
            autoHideDuration={3000}
            onClose={handleCloseCart}>
            <Alert
              onClose={handleCloseCart}
              severity="warning"
              sx={{ width: "100%" }}>
              The item already exist in cart
            </Alert>
          </Snackbar>
        )}
      </Card>
    </div>
  );
}
