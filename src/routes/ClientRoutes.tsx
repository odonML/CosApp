import React from "react";
import { Route, Switch } from "react-router";
import { Layout } from "../components/layout/Layout";

export const ClientRoutes = () => {
  return (
    <Layout>
      <Switch>
        <Route path="/home" >
          <h1>hola1</h1>
        </Route>
        <Route path="/store">
          <h1>hola2</h1>
        </Route>
        <Route path="/profiel">
          <h1>hola3</h1>
        </Route>
        <Route path="/checkout">
          <h1>hola4</h1>
        </Route>
      </Switch>
    </Layout>
  );
};
