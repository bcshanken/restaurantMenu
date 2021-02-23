import React from "react";
import API from "../../utils/API";
import MenuForm from "../../Components/MenuForm/MenuForm";
import AdminNav from "../../Components/AdminNav.jsx/AdminNav";

const NewFood = (props) => {
  const handleFormSubmit = (
    e,
    { title, description, img, price, category }
  ) => {
    e.preventDefault();

    API.createResponse({ title, description, img, price, category }).then(
      (response) => {
        props.history.push("/admin/menu");
      }
    );
  };

  return (
    <>
      <AdminNav />
      <div className="container">
        <div className="row adminMenu">
          <div className="row">
            <div className="col s12">
              <h3 className="center-align formHead">Add a New Product</h3>
            </div>
          </div>
          <MenuForm
            handleFormSubmit={handleFormSubmit}
            buttonText="Create New Item"
          />
        </div>
      </div>
    </>
  );
};

export default NewFood;
