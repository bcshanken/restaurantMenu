import React, { useContext, useEffect, useState } from "react";
import "./Menu.css";
import MenuItem from "../../Components/MenuItem.jsx/MenuItem";
import MenuFilter from "../../Components/MenuFilter.jsx/MenuFilter";
import API from "../../utils/API";
import NavHomeCheckout from "../../Components/Navbar/NavHomeCheckout";
import AlertContext from "../../utils/alertContext";

const Menu = () => {
  const [menuItems, setMenuItems] = useState([]);
  const [menuCategories, setMenuCategories] = useState([]);
  const [currentMenuCategories, setCurrentMenuCategories] = useState([]);
  const alert = useContext(AlertContext);

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
        alert.setAlert({
          message: "Menu could not load right now, check back soon!",
          type: "danger",
        });
      }
    };
    initializeMenu();
    // eslint-disable-next-line
  }, []);

  const filterMenuByCategory = (category) => {
    if (category === "ALL") {
      setCurrentMenuCategories(menuCategories);
    } else {
      setCurrentMenuCategories([category]);
    }
  };

  return (
    <>
    <NavAdminCheckout/>
      <MenuFilter
        menuCategories={menuCategories}
        handleClick={filterMenuByCategory}
      />
      <p className="center-align">{alert.message}</p>
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
