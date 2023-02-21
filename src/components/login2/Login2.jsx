import React from "react";
import axios from "axios";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import Login from "../Login/Login";
import "./login.css"

const Login2 = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();
  

  async function login(event) {
    event.preventDefault();
    try {
      await axios
        .get("", {
          email: email,
          password: password,
        })
        .then(
          (res) => {
            console.log(res);
            const data = res.data;

            if (data.status === true) {
              alert("Login Successfully");
              history.push("/home");
            } else {
              alert("Login Failed");
            }
          },
          (fail) => {
            console.error(fail); // Error!
          }
        );
    } catch (err) {
      alert(err);
    }
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
