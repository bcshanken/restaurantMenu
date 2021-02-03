import React, { useEffect, useState } from "react";
import "./Menu.css";
import MenuItem from "../../Components/Navbar/MenuItem.jsx/MenuItem";
import MenuFilter from "../../Components/Navbar/MenuFilter.jsx/MenuFilter";

const Menu = () => {
  const seedMenuItems = [
    {
      _id: 123,
      title: "Salmon",
      description:
        "Blackened salmon served with peppers, grilled onions, and white rice.",
      img:
        "https://www.dinneratthezoo.com/wp-content/uploads/2019/06/broiled-salmon-11-500x500.jpg",
      price: 19.99,
      category: "entrees",
    },
    {
      _id: 124,
      title: "Salmon",
      description:
        "Blackened salmon served with peppers, grilled onions, and white rice.",
      img:
        "https://www.dinneratthezoo.com/wp-content/uploads/2019/06/broiled-salmon-11-500x500.jpg",
      price: 19.99,
      category: "entrees",
    },
    {
      _id: 126,
      title: "Bacon",
      description:
        "Blackened salmon served with peppers, grilled onions, and white rice.",
      img:
        "https://www.dinneratthezoo.com/wp-content/uploads/2019/06/broiled-salmon-11-500x500.jpg",
      price: 19.99,
      category: "appetizers",
    },
  ];

  const [menuItems, setMenuItems] = useState([]);
  const [menuCategories, setMenuCategories] = useState([]);
  const [currentMenuCategories, setCurrentMenuCategories] = useState([]);

  // TODO: use less hooks //
  useEffect(() => {
    setMenuItems(seedMenuItems);
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

  const filterMenuByCategory = (e) => {
    console.log(e.srcElement);
    e.target.innerText === "ALL"
      ? setCurrentMenuCategories(menuCategories)
      : setCurrentMenuCategories([e.target.innerText]);
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
