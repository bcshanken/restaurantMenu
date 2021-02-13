import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";
import {Link} from "react-router-dom";

const MenuRow = ({ title, description, img, price, _id, category, handleDelete}) => {


    
    return (
        <tr key={_id}>
                    <td>{title}</td>
                    <td class="menuDesc">{description}</td>
                    <td><img
                        src={img}
                        alt={title}
                        style={{ height: "3em" }}
                      ></img>
</td>
                    <td>{category}</td>
                    <td>${price}</td>
                    <td  class="menuIcon"><Link to={`/admin/menu/update/${_id}`}><FontAwesomeIcon icon={faEdit} className="iconlink"/></Link>
                    </td>
                    <td  class="menuIcon"><FontAwesomeIcon icon={faTrash}  onClick={() => handleDelete(_id)} /></td>
                  </tr>
    );
};

export default MenuRow;