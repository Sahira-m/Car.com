import React from "react";

import { useSelector, useDispatch } from "react-redux";
import { AppDispatch, RootState } from "../../redux/store";
import { useEffect } from "react";
import { fetchProducts } from "../../redux/thunks/product";
import ProdcutItem from "../prodcutItem/ProdcutItem";
import Loading from "../loading/Loading";
//css
import "./ProductList.css";
export default function ProductList() {
  //const products = useSelector((state: RootState) => state.product.productList);
  //new code today
  let products;
  const product1 = (products = useSelector(
    (state: RootState) => state.product.productListFilter
  ));
  const product2 = (products = useSelector(
    (state: RootState) => state.product.productList
  ));
  const isLoading = (products = useSelector(
    (state: RootState) => state.product.loading
  ));
  const userInput = useSelector((state: RootState) => state.search.userInput);
  userInput ? (products = product1) : (products = product2);
  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);
  console.log("products loading", isLoading);
  if (isLoading)
    return (
      <div>
        <Loading></Loading>
      </div>
    );

  return (
    <div className="product-list">
      {products.map((item) => {
        return <ProdcutItem key={item._id} product={item}></ProdcutItem>;
      })}
    </div>
  );
}
