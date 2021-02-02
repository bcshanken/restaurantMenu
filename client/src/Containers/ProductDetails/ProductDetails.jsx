import React from "react";

const ProductDetails = () => {
  return (
    <div className="container center-align">
      <h1>product title</h1>
      <img src="https://via.placeholder.com/150"></img>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio suscipit
        culpa placeat ratione aliquid alias? Cumque inventore voluptate debitis
        vero possimus delectus, veniam adipisci assumenda dolore odio, nihil
        saepe modi?
      </p>
      <div class="row">
        <form class="col s12">
          <h3>Customer Comments</h3>
          <div class="row">
            <div class="input-field col s12">
              <input
                placeholder="Customer Comments"
                id="customer_comments"
                type="text"
              />
            </div>
          </div>
          <div class="row">
            <button
              class="btn waves-effect waves-light submit-button"
              type="submit"
              name="action"
            >
              Add to order
              
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ProductDetails;
