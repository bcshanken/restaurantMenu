import React, { useEffect, useState } from "react";
import "./ProductDetails.css";
import API from "../../utils/API";
import AddOn from "../../Components/AddOn/AddOn";
import NavHomeOnly from "../../Components/Navbar/NavHomeOnly";


const ProductDetails = (props) => {
  const [menuItem, setMenuItem] = useState([]);

  useEffect(() => {
    const initializeProductDetails = async () => {
      const response = await API.getItem(props.match.params.id);
      setMenuItem(response.data);
    };

    initializeProductDetails();
    // eslint-disable-next-line
  }, []);

  return (
    <>
    <NavHomeOnly/>
    <main className="product-details-wrapper">
      <div className="img-wrapper">
        <img src={menuItem.img} alt="place holder"></img>
      </div>
      <section>
        <h1>{menuItem.title}</h1>
        <p>{menuItem.description}</p>
        <strong>{menuItem.price}</strong>
      </section>
      <section>
        <h1>Add Ons</h1>
        <AddOn />
        <AddOn />
      </section>
      <section>
        <div className="input-field">
          <textarea
            id="special-instructions"
            className="materialize-textarea"
          ></textarea>
          <label htmlFor="special-instructions">Special instructions</label>
        </div>
      </section>

      <button>Add to order</button>
    </main>
    </>
  );
};

export default ProductDetails;
