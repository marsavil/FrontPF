import React from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import { useState } from "react"; 


const Register = () => {
  const history = useHistory()
  const [fname, setFName] = useState("");
  const [lname, setLName] = useState("");
  console.log(fname)
  const [email, setEmail] = useState("");
  console.log(email)
  const [password, setPassword] = useState("");
  console.log(password)

  async function save(event) {
    event.preventDefault();
    try {
      await axios.post("/user/signup", {
        name: fname+" "+lname ,
        isAdmin: false,
        email: email,
        password: password,
      });
      alert(" Registation Successfully");
      history.push('/login')
    } catch (err) {
      alert(err);
    }
  }

  return (
    <div>
      <div className="register">
        <div className="card">
          <h1 className="texts mt-4">Register</h1>
          <br /><br />
          <form>
            <div>
              <label className="texts">First name</label>
              <input
                type="text"
                className="form-control"
                id="fname"
                placeholder="Enter Name"
                value={fname}
                onChange={(event) => {
                  setFName(event.target.value);
                }}
              />
            </div>

            <div className="form-group">
              <label className="texts">Last name</label>
              <input
                type="text"
                className="form-control"
                id="lname"
                placeholder="Enter Name"
                value={lname}
                onChange={(event) => {
                  setLName(event.target.value);
                }}
              />
            </div>

            <div className="form-group">
              <label className="texts">email</label>
              <input
                type="email"
                className="form-control" 
                id="email"
                placeholder="Enter Name"
                value={email}
                onChange={(event) => {
                  setEmail(event.target.value);
                }}
              />
            </div>

            <div className="form-group">
              <label className="texts">password</label>
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

            <button type="submit" className="btn btn-primary mt-4 texts mb-4" onClick={save}>
              Register
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Register;
