import React, { useEffect, useState } from "react";
import {Link} from "react-router-dom";
import API from "../../utils/API";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";
import NavAdmin from "../../Components/Navbar/NavAdmin";

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
   console.log(id)
   API.deleteResponse(id)
   .then(res => initializeMenu())
   .catch(err => console.log(err));
  };

 
  return (
    <>
    <NavAdmin/>
      <div className="container">
          <div className="row">
              <div className="col s12">
                  <h1 className="center-align">Admin Menu</h1>
              </div>
          </div>
          <div className="row">
              <div classname="col s12">
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
                ({
                  _id,
                  title,
                  description,
                  price,
                  img,
                  category,                  
                }) => (
                  <tr key={_id}>
                    <td>{title}</td>
                    <td>{description}</td>
                    <td><img
                        src={img}
                        alt={title}
                        style={{ height: "3em" }}
                      ></img>
</td>
                    <td>{category}</td>
                    <td>${price}</td>
                    <td><Link to={`/updatefood/${_id}`}><FontAwesomeIcon icon={faEdit} /></Link>
                    </td>
                    <td><FontAwesomeIcon icon={faTrash} onClick={() => handleDelete(_id)} /></td>
                  </tr>
                )
              )}
        </tbody>
      </table>
              </div>
          </div>
      </div>
      </>
  )
};

export default AdminMenu;
