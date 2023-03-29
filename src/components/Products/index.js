import React from "react";
import { useSelector } from "react-redux";

import { ListGroup } from "react-bootstrap";
import Item from "../Item/index";

function Products() {
  const products = useSelector((state) => state.product.products);
  console.log(products);

  return (
    <ListGroup className="mt-5" defaultActiveKey="#link1">
      {products.map((product) => {
        return <Item key={product.id} product={product}></Item>;
      })}
    </ListGroup>
  );
}

export default Products;
