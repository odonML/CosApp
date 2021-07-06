import React from "react";
import { Route, Switch } from "react-router";
import { ClientRoutes } from "./ClientRoutes";

export const MainRouter = () => {
  return (
    <Switch>
      <Route path="/client" component={ClientRoutes}>
      </Route>
      <Route path="/producer">
        <h1>Producer</h1>
      </Route>
      <Route path="/admin">
        <h1>Admin</h1>
      </Route>
      <Route path="/coope">
        <h1>Coope</h1>
      </Route>
    </Switch>
  );
};
