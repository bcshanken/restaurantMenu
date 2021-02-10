import React, { useEffect, useState } from "react";
import "./ProductDetails.css";
import API from "../../utils/API";
import AddOn from "../../Components/AddOn/AddOn";
import NavHomeOnly from "../../Components/Navbar/NavHomeOnly";
import { useLocation } from "react-router-dom";
import ProductDetailsButton from "../../Components/ProductDetailsButton/ProductDetailsButton";
import InstructionsInput from "../../Components/InstructionsInput/InstructionsInput";

const ProductDetails = (props) => {
  const [menuItem, setMenuItem] = useState({});
  const [menu, setMenu] = useState([]);

  const [addOns, setAddOns] = useState([]);
  const [specialInstructions, setSpecialInstructions] = useState("");
  const [orderItems, setOrderItems] = useState(
    JSON.parse(localStorage.getItem("order")) || []
  );

  const location = useLocation();

  useEffect(() => {
    const initializeProductDetails = async () => {
      try {
        const menuItemResponse = await API.getItem(props.match.params.id);
        setMenuItem(menuItemResponse.data);
        const menuResponse = await API.getMenu();
        setMenu(menuResponse.data);
      } catch (err) {
        console.log(err);
      }
    };

    console.log(location);

    initializeProductDetails();
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    try {
      localStorage.setItem("order", JSON.stringify(orderItems));
    } catch (err) {
      console.log(err);
    }
  }, [orderItems]);

  const toggleAddOn = (addOn, isAdded) => {
    isAdded
      ? setAddOns(
          addOns.filter((toggledAddOn) => toggledAddOn._id !== addOn._id)
        )
      : setAddOns([...addOns, addOn]);
  };

  const addToClientOrder = () => {
    const orderItem = {
      menuItem,
      addOns,
      specialInstructions,
      createdAt: Date.now(),
    };
    setOrderItems([...orderItems, orderItem]);
  };

  return (
    <>
      <NavHomeOnly />
      <main className="product-details-wrapper">
        <div className="img-wrapper">
          <img src={menuItem.img} alt="place holder"></img>
        </div>

        <section>
          <h1 className="product-details-title">{menuItem.title}</h1>
          <p className="product-details-description">{menuItem.description}</p>
          <strong className="product-details-price">{menuItem.price}</strong>
        </section>

        <section>
          <h1 className="product-details-title">Add Ons</h1>
          {menu.map((menuItem) =>
            // TODO: menuItem.category === "Side"
            menuItem.category === "Dessert" ? (
              <AddOn
                {...menuItem}
                isAddedOnClientOrder={false}
                handleClick={toggleAddOn}
                key={menuItem._id}
              />
            ) : null
          )}
        </section>

        <InstructionsInput
          value={specialInstructions}
          handleChange={setSpecialInstructions}
        />

        <ProductDetailsButton
          text="Add to order"
          handleClick={addToClientOrder}
        />
      </main>
    </>
  );
};

export default ProductDetails;
