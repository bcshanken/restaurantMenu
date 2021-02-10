import React, { useState } from 'react';
import NavAdmin from "../../Components/Navbar/NavAdmin"

const NewUser = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("")
    
    return (
        <>
        <NavAdmin />
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
                        Sign In
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