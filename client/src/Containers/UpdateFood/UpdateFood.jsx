import React from 'react';
import AdminNav from '../../Components/AdminNav.jsx/AdminNav';


import MenuForm from "../../Components/MenuForm/MenuForm";
import API from "../../utils/API";

const UpdateFood = (props) => {


    const handleFormSubmit = (e, {title,details,img, price, category}, id) =>{
        e.preventDefault();
        API.updateResponse({title,details,img, price, category}, id)
        .then((response) => {
            console.log(response.data);
            props.history.push("/admin/menu")
          })
        }
    return (
        <>
    <AdminNav/>
    <div className="container">
      <div className="row">
        <div className="col s12">
          <h1 className="center-align formHead">Update Menu Item</h1>
        </div>
      </div>
      <div className="row adminMenu">
        <MenuForm handleFormSubmit={handleFormSubmit} buttonText="Update Item"/>

        
      </div>
    </div>
    </>
    );
};

export default UpdateFood;