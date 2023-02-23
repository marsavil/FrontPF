import "./App.css";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Landing from "./components/Landing/Landing";
import Home from "./components/Home/Home";
import Detail from "./components/Detail/Detail";
import Form from "./components/form/Form";
import Confirmation from "./components/Confirmation/Confirmation"
import PaymentReceived from "./PaymentRecieved/PaymentReceived";
import Login2 from "./components/login2/Login2";
import Register from "./components/login2/Register";
import Admin from "./components/Admin/Admin";
function App() {


  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/login" component={Login2} />
          <Route exact path="/register" component={Register} />
          <Route exact path= "/admin" component={Admin}/>
          <Route path="/product/:id" component={Detail} />
          <Route exact path= "/form" component={Form} />
          <Route exact path= "/user/confirm/:token" component={Confirmation}/>
          <Route path= "/payment" component={PaymentReceived}/>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
