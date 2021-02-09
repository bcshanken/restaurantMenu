import React from 'react';


import MenuForm from "../../Components/MenuForm/MenuForm";
import NavAdmin from "../../Components/Navbar/NavAdmin";
import API from "../../utils/API";

const UpdateFood = (props) => {


    const handleFormSubmit = (e, {title,details,img, price, category}, id) =>{
        e.preventDefault();
        API.updateResponse({title,details,img, price, category}, id)
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
        <MenuForm handleFormSubmit={handleFormSubmit} buttonText="Update Item"/>

        
      </div>
    </div>
    </>
    );
};

export default UpdateFood;