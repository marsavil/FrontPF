import React from "react";
//import axios from "axios";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import Login from "../Login/Login";
import "./login.css"
import { useDispatch } from "react-redux";
import { login2 } from "../../Redux/actions";

const Login2 = () => {
  const dispatch = useDispatch()
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();
  

  async function login(event) {
    event.preventDefault();
    dispatch(login2(email, password))
    history.push('/home')
  }

  return (
    <div>
      <div className="login-container">
        <div className="row">
          <h2>Login</h2>
          <hr />
        </div>

        <div className="row">
          <div className="col-sm-6" style={{ width: "100%" }}>
            <form>
              <div className="form-group">
                <label>email</label>
                <input
                  type="email"
                  className="form-control "
                  id="email"
                  placeholder="Enter Name"
                  value={email}
                  onChange={(event) => {
                    setEmail(event.target.value);
                  }}
                />
              </div>

              <div className="form-group">
                <label>password</label>
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  placeholder="Enter Fee"
                  value={password}
                  onChange={(event) => {
                    setPassword(event.target.value);
                  }}
                />
              </div>
              <button type="submit" className="btn btn-primary m-4" onClick={login}>
                Login
              </button>
            </form>
          </div>
        </div>
        <div>
          <Login/>
        </div>
      </div>
      <Link to="/register"><button type="button" class="btn btn-dark">Are you not sign in?</button></Link>
    </div>
  );
}

export default Login2;
