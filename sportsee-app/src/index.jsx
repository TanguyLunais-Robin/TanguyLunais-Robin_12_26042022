//React
import React from "react";
import ReactDOM from "react-dom";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom"

//Components
import NavTop from "./components/NavTop"
import NavLeft from "./components/NavLeft"

//Pages
import UserPage from "./pages/UserPage"

//CSS
import "./styles/index.css";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <NavTop />
      <NavLeft />
      <Switch>
        <Route exact path="/">
          <UserPage />
        </Route>
      </Switch>
    </Router>
  </React.StrictMode>,
document.getElementById('root')
);