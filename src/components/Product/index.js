import React from "react";
import { useParams } from "react-router";
import { useSelector } from "react-redux";

function Product() {
  const getProduct = useParams();
  const product = useSelector((state) => state);
  console.log(product);

  return <h1>product - {getProduct.id} </h1>;
}

export default Product;
