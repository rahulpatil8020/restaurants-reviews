import React, { Component } from "react";
import "./app.scss";
import { Theme, Content } from "@carbon/react";
import RestaurantHeader from "./components/RestaurantHeader";
import { Switch, Route } from "react-router-dom";
import LandingPage from "./content/LandingPage";
import RestaurantPage from "./content/RestaurantPage";
import LoginPage from "./content/LoginPage";
import { UserContext } from "./model/user-context";

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
            <Route exact path={["/", "/restaurants"]} component={LandingPage} />
            <Route render={(props) => <LoginPage {...props} />} path="/login" />
            <Route
              path="/restaurants/:id"
              render={(props) => <RestaurantPage {...props} />}
            />
          </Switch>
        </Content>
      </>
    );
  }
}

export default App;
