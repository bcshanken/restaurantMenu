import React from "react";

const Login = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col s12 m6">
          <div class="card blue-grey darken-1">
            <div class="card-content white-text">
              <span class="card-title">Card Title</span>
              <div class="row">
                <form class="col s12">
                  <div class="row">
                    <div class="input-field col s12">
                      <input id="email" type="email" class="validate" />
                      <label for="email">Email</label>
                      <span
                        class="helper-text"
                        data-error="wrong"
                        data-success="right"
                      >
                        Helper text
                      </span>
                    </div>
                  </div>
                  <div class="row">
                    <div class="input-field col s12">
                      <input id="password" type="password" class="validate" />
                      <label for="password">Password</label>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div class="card-action">
              <a href="#">This is a link</a>
              <a href="#">This is a link</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
