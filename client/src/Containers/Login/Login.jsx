import React from "react";
import "../Login/Login.css"

const Login = () => {
  return (
    <div className="container login-card">
      <div className="row">
        <div className="col s12 m6">
          <div class="card blue-grey darken-1">
            <div class="card-content white-text">
              <span class="card-title">Admin Login</span>
              <div class="row">
                <form class="col s12">
                  <div class="row">
                    <div class="input-field col s12">
                      <input id="email" type="email" class="validate" />
                      <label for="email">Email</label>
                    </div>
                  </div>
                  <div class="row">
                    <div class="input-field col s12">
                      <input id="password" type="password" class="validate" />
                      <label for="password">Password</label>
                    </div>
                    <button
                      class="btn waves-effect waves-light submit-button"
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
  );
};

export default Login;
