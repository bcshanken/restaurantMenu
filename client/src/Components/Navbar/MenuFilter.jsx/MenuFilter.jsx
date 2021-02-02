import React from "react";
import "./MenuFilter.css";

const MenuFilter = ({ menuCategories, handleClick }) => {
  return (
    <div className="scroll-menu">
      <button onClick={handleClick}>ALL</button>
      {menuCategories.map(function (menuCategory) {
        return (
          <button onClick={handleClick} key={menuCategory}>
            {menuCategory}
          </button>
        );
      })}
    </div>
  );
};

export default MenuFilter;
