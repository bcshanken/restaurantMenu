import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquare } from "@fortawesome/free-solid-svg-icons";

import "./AddOn.css";

const AddOn = () => {
  return (
    <div className="add-on-card">
      <span className="add-on-title">
        <FontAwesomeIcon icon={faSquare} />
        {" "}Fries
      </span>
      <span className="add-on-price">+1.00</span>
    </div>
  );
};

export default AddOn;
