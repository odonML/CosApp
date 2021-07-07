import React from "react";
import { Route, Switch } from "react-router";
import { Layout } from "../components/shared";
import { ClientNavbar } from '../components/client'
import { ProducerPage } from "../pages/client";
import { ClientStore } from "../pages/client"
import { Story } from "../pages/client";

export const ClientRoutes = () => {

  return (
    <Layout
      navbar={<ClientNavbar />}>
      <Switch>
        <Route path="/client" exact>
          <ClientStore/>
        </Route>
        <Route path="/client/profile">
          <h1>Profile</h1>
        </Route>
        <Route path="/client/checkout">
          <h1>Checkout</h1>
        </Route>
        <Route path="/client/producer/profile">
          <ProducerPage />
        </Route>
        <Route path="/client/producer/stories/:id">
          <Story/>
        </Route>
      </Switch>
    </Layout>
  );
};
