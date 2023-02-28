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
type PropType = { productDetail: ProductType };

export default function ProductDetails({ productDetail }: PropType) {
  let available = "";
  if (productDetail.inStock === true) available = "Yes";
  else available = "No";

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
          boxShadow: "0 0 20px #e0e0e0",
        }}>
        <CardMedia
          sx={{
            height: 300,
            width: "fit-content",
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
          <Button size="small">Add to cart</Button>
          <Button size="small">Add to favorite</Button>
        </CardActions>
      </Card>
    </div>
  );
}
