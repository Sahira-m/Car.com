import React from "react";

import { useSelector, useDispatch } from "react-redux";
import { AppDispatch, RootState } from "../../redux/store";
import { useEffect } from "react";
import { fetchProducts } from "../../redux/thunks/product";
import ProdcutItem from "../prodcutItem/ProdcutItem";
//css
import "./ProductList.css";
export default function ProductList() {
  const products = useSelector((state: RootState) => state.product.productList);
  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <div className="product-list">
      {products.map((item) => {
        return <ProdcutItem key={item._id} product={item}></ProdcutItem>;
      })}
    </div>
  );
}
