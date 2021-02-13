import React from "react";
import API from "../../utils/API";
import MenuForm from "../../Components/MenuForm/MenuForm"
import AdminNav from "../../Components/AdminNav.jsx/AdminNav";

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
    <AdminNav/>
    <div className="container">
      <div className="row">
        <div className="col s12">
          <h1 className="center-align formHead">Add a New Product</h1>
        </div>
      </div>
      <div className="row adminMenu">
        <MenuForm handleFormSubmit={handleFormSubmit} buttonText="Create New Item"/>

        
      </div>
    </div>
    </>
  );
};

export default NewFood;
