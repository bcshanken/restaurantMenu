import React from "react";
import NavAdmin from "../../Components/Navbar/NavAdmin";
import API from "../../utils/API";
import MenuForm from "../../Components/MenuForm/MenuForm"

const NewFood = (props) => {


    const handleFormSubmit = (e, {title, description, img, price, category}) =>{
        e.preventDefault();
        console.log("create clicked")
        API.createResponse({title, description, img, price, category})
        .then((response) => {
            console.log(response.data);
            props.history.push("/adminmenu")
          })
    }

  return (
    <>
    <NavAdmin/>
    <div className="container">
      <div className="row">
        <div className="col sm12">
          <h1 className="center-align">Add a New Product</h1>
        </div>
      </div>
      <div className="row">
        <MenuForm handleFormSubmit={handleFormSubmit} buttonText="Create New Item"/>

        
      </div>
    </div>
    </>
  );
};

export default NewFood;
