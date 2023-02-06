import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Landing from "./components/Landing/Landing";
import Home from "./components/Home/Home";
import Detail from "./components/Detail/Detail";
import Form from "./components/Form/Form"


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route exact path="/home" component={Home} />
          <Route path="/product/:id" component={Detail} />
          <Route exact path= "/form" component={Form} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
