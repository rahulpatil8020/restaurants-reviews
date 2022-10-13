import React, { Component } from "react";
import "./app.scss";
import { Theme, Content } from "@carbon/react";
import RestaurantHeader from "./components/RestaurantHeader";
import { Switch, Route } from "react-router-dom";
import LandingPage from "./content/LandingPage";
import RestaurantPage from "./content/RestaurantPage";

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
            <Route exact path="/" component={LandingPage} />
            <Route path="/restaurant" component={RestaurantPage} />
          </Switch>
        </Content>
      </>
    );
  }
}

export default App;
