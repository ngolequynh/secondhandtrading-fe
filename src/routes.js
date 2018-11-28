import React, { Fragment } from "react";
import { Route, BrowserRouter, Switch } from "react-router-dom";
import Login from "./components/Login/LoginForm";
import DrawerAppBar from "./components/AppBar";
import AuthRoute from "./route/AuthRoute";

export function AppRouter() {
  return (
    <BrowserRouter>
      <Switch>
        <AuthRoute exact path="/login" component={Login} />

        <AuthRoute exact path="/success_login" component={<div />} />
        {/* The Switch component only expects Route components children. Thy why we need to uese Fragment instead of <div>*/}
        <Fragment>
          <DrawerAppBar />
          <Route
            exact
            path="/"
            render={() => <div style={{ textAlign: "center" }}>Trang chủ</div>}
          />
        </Fragment>
      </Switch>
    </BrowserRouter>
  );
}
