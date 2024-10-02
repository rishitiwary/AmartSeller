import React, { Component } from "react";
import rootRoutes from "./components/admin/rootRoutes";
import Auth from "./components/auth";
import NoMatch from "./components/nomatch";
import { Switch, Route, BrowserRouter, Redirect } from "react-router-dom";
import PrivateRoute from "./components/auth/PrivateRoute";
import { NotificationContainer } from "react-notifications";
import "react-datepicker/dist/react-datepicker.css";
import "react-notifications/lib/notifications.css";
import { getCookie } from "./function";

export default class App extends Component {
  render() {
    const token = getCookie("token");
    const role = getCookie("role");
    return (
      <div className="App">
        <BrowserRouter>
          <NotificationContainer />
          <Switch>
            <Route path="/auth" component={Auth} />
            {token && role === "seller" ? (
              <PrivateRoute path="/admin" component={rootRoutes} />
            ) : (
              <Redirect to={"/auth/login"} />
            )}
            {token && role === "seller" ? (
              <Redirect to={"/admin"} />
            ) : (
              <Redirect to={"/auth/login"} />
            )}
            <Route component={NoMatch} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}
