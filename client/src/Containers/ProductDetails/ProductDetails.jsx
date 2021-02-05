import React from "react";
import "./ProductDetails.css";

const ProductDetails = () => {
  return (
    <main className="product-details-wrapper">
      <div className="img-wrapper">
        <img
          src="https://res.cloudinary.com/dwc5cle4q/image/upload/v1612279412/Aquaman/Shrimp-Curry_vv5p77.jpg"
          alt="place holder"
        ></img>
      </div>
      <section>
        <h1>Pizza</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio suscipit
          culpa placeat ratione aliquid alias? Cumque inventore voluptate
          debitis vero possimus delectus, veniam adipisci assumenda dolore odio,
          nihil saepe modi?
        </p>
        <strong>5.00</strong>
      </section>
      <section>
        <h1>Add Ons</h1>
      </section>
      <div className="input-field">
        <textarea id="special-instructions" className="materialize-textarea"></textarea>
        <label htmlFor="special-instructions">Special instructions</label>
      </div>
      <button>Add to order</button>
    </main>
  );
};

export default ProductDetails;
