import React, {useContext} from "react";
import { NavLink } from "react-router-dom";
import TokenContext from "../../utils/tokenContext";
import { useHistory } from "react-router-dom";
import "./AdminNav.css"
const AdminNav = () => {
  const {logout, token} = useContext(TokenContext);
  const history = useHistory();

  const logOutUser = () => {
    logout(() => {
      history.push("/");
    })
  }
  return (
    <nav className="nav-extended">
      <div className="nav-wrapper">
        <NavLink to="/" className="brand-logo">
          POSEIDON'S CATCH
        </NavLink>
      </div>
      <div className="nav-content">
        <ul className="tabs tabs-transparent">
          <li className="tab">
            <NavLink to="/admin/menu">My Menu</NavLink>
          </li>
          <li className="tab">
            <NavLink to="/admin/menu/add">Add Menu Item</NavLink>
          </li>
          <li className="tab">
            <NavLink to="/admin/orders">Orders</NavLink>
          </li>
          <li className="tab">
            <NavLink to="/admin/create-user">Create User</NavLink>
          </li>
          <li className="tab">
            <button className="logoutBtn" onClick={()=>logOutUser()}>LOGOUT</button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default AdminNav;
