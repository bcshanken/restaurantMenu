import React from "react";
import MenuItem from "../../Components/Navbar/MenuItem.jsx/MenuItem";

const Menu = () => {
  const menuItems = [
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
        _id: 125,
        title: "Salmon",
        description:
          "Blackened salmon served with peppers, grilled onions, and white rice.",
        img:
          "https://www.dinneratthezoo.com/wp-content/uploads/2019/06/broiled-salmon-11-500x500.jpg",
        price: 19.99,
        category: "entrees",
      },
  ];

  return (
    <div>
      {menuItems.map((menuItem) => (
        <MenuItem {...menuItem} key={menuItem._id} />
      ))}
    </div>
  );
};

export default Menu;
