import React from "react";
import { ListGroup } from "react-bootstrap";

function Item({ product }) {
  return (
    <ListGroup.Item action href={`/product/${product.id}`}>
      {product.title} - {product.description} - {product.price}$
    </ListGroup.Item>
  );
}

export default Item;
