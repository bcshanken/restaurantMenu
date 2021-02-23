import React from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import "./MenuItem.css";

const MenuItem = ({ title, description, img, price, _id }) => {
  return (
    <NavLink to={`/item/${_id}`} className="card horizontal menu-item-card">
      <img className="menu-item-image" src={img} alt={title} />
      <div className="menu-item-content">
        <article className="line-clamp-4">
          <h1 className="menu-item-title">{title}</h1>
          <br className="inline-spacer" />
          <p className="menu-item-description">{description}</p>
        </article>
        <div className="menu-item-price-row">
          <strong className="menu-item-price">{price}</strong>
          <strong className="menu-item-price">
            <FontAwesomeIcon icon={faAngleRight} />
          </strong>
        </div>
      </div>
    </NavLink>
  );
};

export default MenuItem;
