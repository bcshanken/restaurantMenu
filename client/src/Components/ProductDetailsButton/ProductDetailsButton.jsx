import React from "react";
import "./ProductDetailsButton.css";

const ProductDetailsButton = ({ text, handleClick }) => {
  return (
    <button className="product-details-submit" onClick={handleClick}>
      {text}
    </button>
  );
};

export default ProductDetailsButton;
