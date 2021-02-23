import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquare, faCheckSquare } from "@fortawesome/free-regular-svg-icons";

import "./AddOn.css";

const AddOn = ({ title, price, _id, isAddedOnClientOrder, handleClick }) => {
  const [isAdded, setIsAdded] = useState(isAddedOnClientOrder);

  return (
    <button
      className={`add-on-card ${isAdded ? "add-on-added" : ""} `}
      onClick={() => {
        setIsAdded(!isAdded);
        handleClick({ title, price, _id }, isAdded);
      }}
    >
      <span className="add-on-title">
        <FontAwesomeIcon
          icon={isAdded ? faCheckSquare : faSquare}
          className="add-on-icon"
        />
        {title}
      </span>
      <span className="add-on-price">{`+${price}`}</span>
    </button>
  );
};

export default AddOn;
