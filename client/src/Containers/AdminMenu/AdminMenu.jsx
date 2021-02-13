import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import API from "../../utils/API";

import "./AdminMenu.css";
import MenuRow from "../../Components/MenuRow/MenuRow";
import AdminNav from "../../Components/AdminNav.jsx/AdminNav";

const AdminMenu = () => {
  const [menuItems, setMenuItems] = useState([]);

  useEffect(() => {
    initializeMenu();
  }, []);

  const initializeMenu = () => {
    API.getMenu()
      .then((response) => {
        console.log(response.data);
        setMenuItems(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleDelete = (id) => {
    console.log(id);
    API.deleteResponse(id)
      .then((res) => initializeMenu())
      .catch((err) => console.log(err));
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
            <div className="col s12">
              <Link to="/admin/menu/add">
                <button className="btn waves-effect waves-light submit-button">
                  Create New Food
                </button>
              </Link>
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
                  {menuItems.map(
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
