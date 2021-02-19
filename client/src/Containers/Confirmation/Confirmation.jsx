import React from "react";
import UserNav from "../../Components/UserNav.jsx/UserNav";
import "../Confirmation/Confirmation.css";
import { Link } from "react-router-dom";

const Confirmation = () => {
  return (
    <div>
      <UserNav />
      <div class="confirmationCard">
        <h4 class="center-align">Your order has been submitted. </h4>
        <h4 class="center-align">Thank you for your business.</h4>
        <div class="center-align row confirmButtonRow">
          <Link to="/">
            <button className="btn waves-effect waves-light submit-button">
              Return to Menu
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Confirmation;
