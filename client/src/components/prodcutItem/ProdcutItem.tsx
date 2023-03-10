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
import { useDispatch } from "react-redux";
import { useState } from "react";
import { Link } from "react-router-dom";
import { RootState } from "../../redux/store";
import { useSelector } from "react-redux";
import { cartActions } from "../../redux/slices/cart";
import { productActions } from "../../redux/slices/product";

type PropType = { product: ProductType };

export default function ProdcutItem({ product }: PropType) {
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

  const addToCart = () => {
    const dis = dispatch(cartActions.addToCart(product));
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
          width: 280,
          my: 5,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          boxShadow: "0 0 20px #E0E0E0",
        }}>
        <Link to={`/productDetail/${product._id}`}>
          <CardMedia
            style={{
              width: 210,
              height: 270,
              marginTop: "15px",
              cursor: "default",
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
      {isAddToFavourite ? (
        <Snackbar open={open} autoHideDuration={2500} onClose={handleClose}>
          <Alert
            onClose={handleClose}
            severity="success"
            sx={{ width: "100%" }}>
            {product.productName} is added to favorite!
          </Alert>
        </Snackbar>
      ) : (
        <Snackbar open={open} autoHideDuration={2500} onClose={handleClose}>
          <Alert
            onClose={handleClose}
            severity="warning"
            sx={{ width: "100%" }}>
            {product.productName} is already in favorite!
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
    </div>
  );
}
