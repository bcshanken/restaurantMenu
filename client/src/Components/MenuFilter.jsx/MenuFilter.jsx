import React from "react";
import "./MenuFilter.css";

const MenuFilter = ({ menuCategories, handleClick }) => {
  return (
    <div className="scroll-menu">
      <button onClick={() => {handleClick("ALL")}}>ALL</button>
      {menuCategories.map((menuCategory) => {
        return (
          <button onClick={() => {handleClick(menuCategory)}} key={menuCategory}>
            {menuCategory}
          </button>
        );
      })}
    </div>
  );
};

export default MenuFilter;
