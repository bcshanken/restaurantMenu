import React, { useEffect, useState } from "react";
import "./ProductDetails.css";
import API from "../../utils/API";
import AddOn from "../../Components/AddOn/AddOn";
import NavHomeOnly from "../../Components/Navbar/NavHomeOnly";

const ProductDetails = (props) => {
  const [menuItem, setMenuItem] = useState({});
  const [menu, setMenu] = useState([]);
  const [addOns, setAddOns] = useState([]);
  const [specialInstructions, setSpecialInstructions] = useState("");

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

    initializeProductDetails();
    // eslint-disable-next-line
  }, []);

  const toggleAddOn = (addOn, isAdded) => {
    isAdded
      ? setAddOns(
          addOns.filter((toggledAddOn) => toggledAddOn._id !== addOn._id)
        )
      : setAddOns([...addOns, addOn]);
  };

  const addToClientOrder = () => {
    const orderItems = localStorage.getItem("order")
      ? JSON.parse(localStorage.getItem("order"))
      : [];
    const orderItem = {
      menuItem,
      addOns,
      specialInstructions,
    };
    orderItems.push(orderItem);
    try {
      localStorage.setItem("order", JSON.stringify(orderItems));
    } catch (err) {
      //user has local storage disabled or too many order items
      console.log(err);
    }
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
                key={menuItem._id}
                handleClick={toggleAddOn}
              />
            ) : null
          )}
        </section>

        <div className="input-field">
          <textarea
            id="special-instructions"
            className="materialize-textarea"
            onChange={(e) => {
              setSpecialInstructions(e.target.value);
            }}
          ></textarea>
          <label htmlFor="special-instructions">Special instructions</label>
        </div>

        <button className="product-details-submit" onClick={addToClientOrder}>
          Add to order
        </button>
      </main>
    </>
  );
};

export default ProductDetails;
