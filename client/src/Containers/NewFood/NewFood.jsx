
import React, { useState } from "react";
import API from "../../utils/API";

const NewFood = (props) => {

    const [title, setTitle] = useState("");
    const [details, setDetails] = useState("");
    const [img, setImg] = useState("");
    const [price, setPrice] = useState("");
    const [category, setCategory] =useState("");

    const handleFormSubmit = (e) =>{
        e.preventDefault();
        API.createResponse({title,details,img, price, category})
        .then((response) => {
            console.log(response.data);
            props.history.push("/adminmenu")
          })
    }

  return (
    <div className="container">
      <div className="row">
        <div className="col sm12">
          <h1 className="center-align">Add a New Product</h1>
        </div>
      </div>
      <div className="row">
        <form className="col s12" onSubmit={handleFormSubmit}>
          <div className="row">
            <div className="input-field col s6">
              <input
                placeholder="Dish Name"
                id="title"
                type="text"
                className="validate"
                name="title"
                value={title}
                onChange={(e) => {
                    setTitle(e.target.value)
                }}
              />
            </div>

            <div className="input-field col s6">
              <input
                placeholder="Image Url"
                id="img"
                type="text"
                className="validate"
                name="img"
                value={img}
                onChange={(e) => {
                    setImg(e.target.value)
                }}
              />
            </div>
            <div className="input-field col s6">
              <input
                placeholder="Price"
                id="price"
                type="text"
                className="validate"
                name="price"
                value={price}
                onChange={(e) => {
                    setPrice(e.target.value)
                }}
              />
            </div>
            <div className="input-field col s6">
              <select className="browser-default"  name="category"
                value={category}
                onChange={(e) => {
                    setCategory(e.target.value)
                }}>
                <option value="" selected>
                  Category
                </option>
                <option value="Appetizer">Appetizer</option>
                <option value="Entree">Entree</option>
                <option value="Dessert">Dessert</option>
              </select>
            </div>
            <div className="input-field col s12">
              <input
                placeholder="details"
                id="detials"
                type="text"
                className="validate"
                name="details"
                value={details}
                onChange={(e) => {
                    setDetails(e.target.value)
                }}
              />
            </div>
            <div className="col s12">
            <button
              class="btn waves-effect waves-light submit-button"
              type="submit"
              name="action"
            >
              Create New Menu Item
              
            </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default NewFood;
