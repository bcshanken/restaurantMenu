import React, { useEffect, useState } from "react";
import "./Menu.css";
import MenuItem from "../../Components/MenuItem.jsx/MenuItem";
import MenuFilter from "../../Components/MenuFilter.jsx/MenuFilter";
import API from "../../utils/API";

const Menu = () => {
  const [menuItems, setMenuItems] = useState([]);
  const [menuCategories, setMenuCategories] = useState([]);
  const [currentMenuCategories, setCurrentMenuCategories] = useState([]);

  // TODO: use less hooks //
  useEffect(() => {
    const initializeMenu = async () => {
      try {
        const response = await API.getMenu();
        setMenuItems(response.data);
        const categoriesSet = [
          ...new Set(
            response.data.map((menuItem) => menuItem.category.toUpperCase())
          ),
        ];
        setMenuCategories(categoriesSet);
        setCurrentMenuCategories(categoriesSet);
      } catch (err) {
        console.log(err);
      }
    };
    initializeMenu();
    // eslint-disable-next-line
  }, []);

  const filterMenuByCategory = (filter) => {
    if (filter === "ALL") {
      setCurrentMenuCategories(menuCategories);
    } else {
      setCurrentMenuCategories([filter]);
    }
  };

  return (
    <>
      <MenuFilter
        menuCategories={menuCategories}
        handleClick={filterMenuByCategory}
      />
      <section className="menu-wrapper">
        {currentMenuCategories.map((menuCategory) => {
          return (
            <div className="menu-category-wrapper" key={menuCategory}>
              <span className="menu-category">{menuCategory}</span>
              {menuItems.map((menuItem) =>
                menuCategory === menuItem.category.toUpperCase() ? (
                  <MenuItem {...menuItem} key={menuItem._id} />
                ) : null
              )}
            </div>
          );
        })}
      </section>
    </>
  );
};

export default Menu;
