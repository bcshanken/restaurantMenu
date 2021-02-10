import React from "react";
import { useHistory } from "react-router-dom";
import "./ProductDetailsDelete.css";

const ProductDetailsDelete = ({ handleClick }) => {
  const history = useHistory();

  return (
    <button
      className="product-details-delete"
      onClick={() => {
        handleClick();
        history.goBack();
      }}
    >
      Remove item
    </button>
  );
};

export default ProductDetailsDelete;
