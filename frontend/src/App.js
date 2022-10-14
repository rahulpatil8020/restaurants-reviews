import React, { Component } from "react";
import "./app.scss";
import { Theme, Content } from "@carbon/react";
import RestaurantHeader from "./components/RestaurantHeader";
import { Switch, Route } from "react-router-dom";
import LandingPage from "./content/LandingPage";
import RestaurantPage from "./content/RestaurantPage";
import LoginPage from "./content/LoginPage";

class App extends Component {
  user = null;
  render() {
    return (
      <>
        <Theme theme="g100">
          <RestaurantHeader />
        </Theme>
        <Content>
          <Switch>
            <Route path="/restaurants" component={LandingPage} />
            <Route path="/login" component={LoginPage} />
            <Route path="/repos" component={RestaurantPage} />
          </Switch>
        </Content>
      </>
    );
  }
}

export default App;
