import React from "react";
import { useHistory } from "react-router-dom";
import "./ProductDetailsButton.css";

const ProductDetailsButton = ({ text, handleClick }) => {
  const history = useHistory();

  return (
    <button
      className="product-details-submit"
      onClick={() => {
        handleClick();
        history.goBack();
      }}
    >
      {text}
    </button>
  );
};

export default ProductDetailsButton;
