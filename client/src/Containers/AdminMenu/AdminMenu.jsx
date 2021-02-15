import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import API from "../../utils/API";

import "./AdminMenu.css";
import MenuRow from "../../Components/MenuRow/MenuRow";
import AdminNav from "../../Components/AdminNav.jsx/AdminNav";

const AdminMenu = () => {
  const [menuItems, setMenuItems] = useState([]);
  const [displayMenuItems, setDisplayMenuItems] = useState([]);


  useEffect(() => {
    initializeMenu();
  }, []);

  const initializeMenu = () => {
    API.getMenu()
      .then((response) => {
        setMenuItems(response.data);
        setDisplayMenuItems(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleDelete = (id) => {
    API.deleteResponse(id)
      .then((res) => initializeMenu())
      .catch((err) => console.log(err));
  };

  const handleReset = () => {
    setDisplayMenuItems(menuItems);
  };


  return (
    <>
      <AdminNav />
      <div className="container">
        <div className="adminMenu">
          <div className="row">
            <div className="col s12">
              <h1 className="center-align">Admin Menu</h1>
            </div>
            <div className="row center-align">
              <div className="col s3 menuFilterButtons">
                <Link to="/newfood">
                  <button className="btn waves-effect waves-light submit-button">
                    Create New Food
                  </button>
                </Link>
              </div>
              <div className="col s3 input-field">
                <input
                  id="searchTerm"
                  type="text"
                  className="validate"
                  name="searchTerm"
                  placeholder="Search Names"
                 
                  onChange={(e) => {
                  
                    let searchVar = "";
                    searchVar = searchVar.concat(e.target.value)
                    console.log(searchVar);
                    const searchedItems = menuItems.filter(
                      (item) => {
                        return item.title.toLowerCase().includes(searchVar.toLowerCase());
                      }
                    );
                    setDisplayMenuItems(searchedItems);
                  }}
                ></input>
              </div>
              <div className="col s3 input-field">
                <select
                  id="filterTerm"
                  className="browser-default"
                  name="category"

                  onChange={(e) => {
                    

                    const filteredItems = menuItems.filter(
                      (item) => {
                        return item.category.includes(e.target.value);
                      }
                    );
                    setDisplayMenuItems(filteredItems);
                  }}
                >
                  <option value="" selected>
                    Category
                  </option>
                  <option value="Appetizer">Appetizer</option>
                  <option value="Entree">Entree</option>
                  <option value="Dessert">Dessert</option>
                  <option value="Side">Side</option>
                </select>
              </div>
              <div className="col s3 menuFilterButtons">
                <button
                  className="btn waves-effect waves-light submit-button"
                  onClick={handleReset}
                >
                  Reset Menu
                </button>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col s12">
              <table>
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Description</th>
                    <th>Img</th>
                    <th>Category</th>
                    <th>Price</th>
                    <th>Edit</th>
                    <th>Delete</th>
                  </tr>
                </thead>

                <tbody>
                  {displayMenuItems.map(
                    ({ _id, title, description, price, img, category }) => (
                      <MenuRow
                        _id={_id}
                        title={title}
                        description={description}
                        price={price}
                        img={img}
                        category={category}
                        handleDelete={handleDelete}
                      />
                    )
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminMenu;
