import React from "react";
import ProductDetails from "../components/productDetails/ProductDetails";
import { fetchProductDetail } from "../redux/thunks/productDetails";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../redux/store";
import { useParams } from "react-router";

const ProductDetail = () => {
  const { id } = useParams();
  const productDetails = useSelector(
    (state: RootState) => state.product.productDetail
  );
  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    dispatch(fetchProductDetail(id));
  }, [dispatch, id]);

  return (
    <div>
      <ProductDetails productDetail={productDetails} />
    </div>
  );
};

export default ProductDetail;
