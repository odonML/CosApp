import React from "react";
import { Route, Switch } from "react-router";
import { ClientRoutes } from "./ClientRoutes";

export const MainRouter = () => {
  return (
    <Switch>
      <Route path="/client" component={ClientRoutes} />
      <Route path="/producer" />
      <Route path="/admin" />
      <Route path="/coope" />
    </Switch>
  );
};