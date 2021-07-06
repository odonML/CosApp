import React from "react";
import { Route, Switch } from "react-router";
import { Layout } from "../components/shared/";
import { ClientNavbar } from '../components/client'

export const ClientRoutes = () => {

  return (
    <Layout
      navbar={<ClientNavbar />}>
      <Switch>
        <Route path="/client" exact>
          <h1>Home</h1>
        </Route>
        <Route path="/client/store">
          <h1>Store</h1>
        </Route>
        <Route path="/client/profile">
          <h1>Profile</h1>
        </Route>
        <Route path="/client/checkout">
          <h1>Checkout</h1>
        </Route>
      </Switch>
    </Layout>
  );
};
