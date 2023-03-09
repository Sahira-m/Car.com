import React from "react";
import { ProductType } from "../../common/productType";
//mui
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Alert, Snackbar } from "@mui/material";

import { useDispatch, useSelector } from "react-redux";

import { useState } from "react";
import { RootState } from "../../redux/store";
import { Link } from "react-router-dom";
//new
import { cartActions } from "../../redux/slices/cart";
import { productActions } from "../../redux/slices/product";
type PropType = { product: ProductType };
export default function ProdcutItem({ product }: PropType) {
  const dispatch = useDispatch();

  const [open, setOpen] = useState(false);
  const [openCart, setOpenCart] = useState(false);
  const handleClick = () => {
    setOpen(true);
  };

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

  const handleCloseCart = (
    event?: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }

    setOpenCart(false);
  };
  //new code test
  const addToCart = () => {
    console.log("product", product);
    const dis = dispatch(cartActions.addToCart(product));
    console.log("disp", dis);
    handleClickCart();
  };
  const addToFavourite = () => {
    dispatch(productActions.addToFavorite(product));
    handleClick();
  };
  return (
    <div className="product-item">
      <Card
        sx={{
          width: 350,
          my: 5,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          boxShadow: "0 0 20px #e0e0e0",
        }}>
        <Link to={`/productDetail/${product._id}`}>
          <CardMedia
            sx={{
              height: 300,
              width: "fit-content",
              padding: "20px",
              margin: "0 auto",
            }}
            src={product.image}
            component="img"
            title={product.productName}
          />
        </Link>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {product.productName}
          </Typography>
          <Typography variant="body1" color="text.secondary">
            ${product.price} Quantity:{product.quantity}
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
      </Card>
      <Snackbar open={open} autoHideDuration={2500} onClose={handleClose}>
        <Alert onClose={handleClose} severity="error" sx={{ width: "100%" }}>
          {product.productName} is already added to favorite!
        </Alert>
      </Snackbar>
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
    </div>
  );
}
