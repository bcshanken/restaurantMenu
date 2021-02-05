import React, { useState } from "react";
import "./MenuFilter.css";

const MenuFilter = ({ menuCategories, handleClick }) => {
  const [activeCategory, setActiveCategory] = useState("ALL");

  return (
    <div className="scroll-menu">
      <button
        onClick={() => {
          handleClick("ALL");
          setActiveCategory("ALL");
        }}
        className={activeCategory === "ALL" ? "active" : null}
      >
        ALL
      </button>
      {menuCategories.map((menuCategory) => {
        return (
          <button
            onClick={() => {
              handleClick(menuCategory);
              setActiveCategory(menuCategory);
            }}
            className={activeCategory === menuCategory ? "active" : null}
            key={menuCategory}
          >
            {menuCategory}
          </button>
        );
      })}
    </div>
  );
};

export default MenuFilter;
