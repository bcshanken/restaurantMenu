import React, { useEffect, useState } from "react";
import "./Menu.css";
import MenuItem from "../../Components/Navbar/MenuItem.jsx/MenuItem";
import MenuFilter from "../../Components/Navbar/MenuFilter.jsx/MenuFilter";
import API from "../../utils/API";

const Menu = () => {
  const [menuItems, setMenuItems] = useState([]);
  const [menuCategories, setMenuCategories] = useState([]);
  const [currentMenuCategories, setCurrentMenuCategories] = useState([]);

  // TODO: use less hooks //
  useEffect(() => {
    initializeMenu();
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    setMenuCategories([
      ...new Set(menuItems.map((menuItem) => menuItem.category.toUpperCase())),
    ]);
    setCurrentMenuCategories([
      ...new Set(menuItems.map((menuItem) => menuItem.category.toUpperCase())),
    ]);
  }, [menuItems]);

  const filterMenuByCategory = (filter) => {
    if (filter === "ALL") {
      setCurrentMenuCategories(menuCategories);
    } else {
      setCurrentMenuCategories([filter]);
    }
  };

  const initializeMenu = () => {
    API.getMenu()
      .then((response) => {
        console.log(response);
        setMenuItems(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
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
