//React
import React from "react"
import ReactDOM from "react-dom"
import {BrowserRouter as Router, Route, Switch} from "react-router-dom"

//Components
import NavTop from "./components/NavTop"
import NavLeft from "./components/NavLeft"
import Error from "./components/Error"

//Pages
import UserPage from "./pages/UserPage"
import ActivityPage from "./pages/ActivityPage"
import AverageSessionsPage from "./pages/AverageSessionsPage"
import TodayScorePage from "./pages/TodayScorePage"
import ActivitiesPage from "./pages/ActivitiesPage"
import KeyDataPage from "./pages/KeyDataPage"

//CSS
import "./styles/index.css"

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <NavTop />
      <NavLeft />
      <Switch>
        <Route
          exact path = "/:id"
          render = {(props) =>
            <UserPage {...props}/>
        }>
        </Route>

        <Route
          path = "/:id/activity"
          render = {(props) =>
            <ActivityPage {...props}/>
        }>
        </Route>

        <Route
          path = "/:id/average-sessions"
          render = {(props) =>
            <AverageSessionsPage {...props}/>
        }>
        </Route>

        <Route
          path = "/:id/today-score"
          render = {(props) =>
            <TodayScorePage {...props}/>
        }>
        </Route>

        <Route
          path = "/:id/activities"
          render = {(props) =>
            <ActivitiesPage {...props}/>
        }>
        </Route>

        <Route
          path = "/:id/key-data"
          render = {(props) =>
            <KeyDataPage {...props}/>
        }>
        </Route>

        <Route path="*">
          <Error />
        </Route>

      </Switch>
    </Router>
  </React.StrictMode>,
document.getElementById('root')
)