import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import { routes } from "../../core/router";
import { Home } from "../home";
import { CheckingAccount } from "../checkingAccount";
import { Footer, Header } from "./components";

import "./MainLayout.scss";

export const MainLayout = () => {
  return (
    <div className={"MainLayout"}>
      <Router>
        <Header />
        <main className="MainLayout-content">
          <Switch>
            <Route exact path={routes.root}>
              <Home />
            </Route>
            <Route path={routes.checking}>
              <CheckingAccount />
            </Route>
          </Switch>
        </main>
      </Router>
      <Footer />
    </div>
  );
};
