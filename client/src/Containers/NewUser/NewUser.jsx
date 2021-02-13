import React, { useState } from 'react';
import axios from "axios"
import {useHistory} from "react-router-dom"
import AdminNav from '../../Components/AdminNav.jsx/AdminNav';

const NewUser = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("")

    const history = useHistory()

    const handleFormSubmit = (e) => {
        e.preventDefault();
        axios
          .post("/api/auth/", { firstName, lastName, email, password })
          .then((response) => {
            console.log(response.data);
            history.push("/adminmenu");
          })
          .catch((err) => {
            console.log(err);
            console.log("Incorrect");
          });
      };

    return (
        <>
        <AdminNav />
        <div className="container login-card">
        <div className="row">
          <div className="col s12 m6">
            <div className="card blue-grey darken-1">
              <div className="card-content white-text">
                <span className="card-title">Admin Login</span>
                <div className="row">
                  <form className="col s12" onSubmit={handleFormSubmit}>
                    <div className="row">
                    <div className="input-field col s12">
                        <input
                          id="first_name"
                          type="text"
                          className="validate"
                          value={firstName}
                          onChange={(e) => {
                            setFirstName(e.target.value);
                          }}
                        />
                        <label htmlFor="firstName">First Name</label>
                      </div>
                      <div className="input-field col s12">
                        <input
                          id="last_name"
                          type="text"
                          className="validate"
                          value={lastName}
                          onChange={(e) => {
                            setLastName(e.target.value);
                          }}
                        />
                        <label htmlFor="lastName">Last Name</label>
                      </div>
                      <div className="input-field col s12">
                        <input
                          id="email"
                          type="email"
                          className="validate"
                          value={email}
                          onChange={(e) => {
                            setEmail(e.target.value);
                          }}
                        />
                        <label htmlFor="email">Email</label>
                      </div>
                    </div>
                    <div className="row">
                      <div className="input-field col s12">
                        <input
                          id="password"
                          type="password"
                          className="validate"
                          value={password}
                          onChange={(e) => {
                            setPassword(e.target.value);
                          }}
                        />
                        <label htmlFor="password">Password</label>
                      </div>
                      <button
                        className="btn waves-effect waves-light submit-button"
                        type="submit"
                        name="action"
                      >
                        Create User
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </>
    );
};

export default NewUser;