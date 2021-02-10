import React, { useEffect, useState } from "react";
import "./ProductDetails.css";
import API from "../../utils/API";
import AddOn from "../../Components/AddOn/AddOn";
import NavHomeOnly from "../../Components/Navbar/NavHomeOnly";
import { useLocation, useParams } from "react-router-dom";
import ProductDetailsSubmit from "../../Components/ProductDetailsSubmit/ProductDetailsSubmit";
import InstructionsInput from "../../Components/InstructionsInput/InstructionsInput";
import ProductDetailsDelete from "../../Components/ProductDetailsDelete/ProductDetailsDelete";

const ProductDetails = (props) => {
  const [menuItem, setMenuItem] = useState({});
  const [menu, setMenu] = useState([]);

  const [addOns, setAddOns] = useState([]);
  const [specialInstructions, setSpecialInstructions] = useState("");
  const [orderItems, setOrderItems] = useState(
    JSON.parse(localStorage.getItem("order")) || []
  );

  const params = useParams();
  const { state: orderItem } = useLocation();

  useEffect(() => {
    const initializeProductDetails = async () => {
      try {
        const menuItemResponse = await API.getItem(params.id);
        setMenuItem(menuItemResponse.data);
        const menuResponse = await API.getMenu();
        setMenu(menuResponse.data);
      } catch (err) {
        console.log(err);
      }
    };

    const initializeOrderItem = () => {
      if (orderItem) {
        setSpecialInstructions(orderItem.specialInstructions);
        setAddOns(orderItem.addOns);
      }
    };

    initializeProductDetails();
    initializeOrderItem();
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
    const orderItemToAdd = {
      menuItem,
      addOns,
      specialInstructions,
      createdAt: Date.now(),
    };
    setOrderItems([...orderItems, orderItemToAdd]);
  };

  const editClientOrder = () => {
    const orderItemToEdit = {
      menuItem,
      addOns,
      specialInstructions,
      createdAt: orderItem.createdAt,
    };

    const temp = orderItems;
    const indexToEdit = orderItems.findIndex(
      (e) => e.createdAt === orderItem.createdAt
    );
    temp[indexToEdit] = orderItemToEdit;
    setOrderItems([...temp]);
  };

  const removeFromClientOrder = () => {
    setOrderItems(
      orderItems.filter((e) => e.createdAt !== orderItem.createdAt)
    );
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
                isAddedOnClientOrder={addOns.some(
                  (addOn) => addOn._id === menuItem._id
                )}
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

        <ProductDetailsSubmit
          text={orderItem ? "Edit item" : "Add to order"}
          pushTo={orderItem ? "/checkout" : "/menu"}
          handleClick={orderItem ? editClientOrder : addToClientOrder}
        />

        {orderItem ? (
          <ProductDetailsDelete handleClick={removeFromClientOrder} />
        ) : null}
      </main>
    </>
  );
};

export default ProductDetails;
