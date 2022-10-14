import React from "react";
import {
  Header,
  HeaderContainer,
  HeaderName,
  HeaderMenuButton,
  HeaderGlobalBar,
  HeaderGlobalAction,
  SkipToContent,
} from "@carbon/react";
import { Link } from "react-router-dom";

const RestaurantHeader = () => (
  <HeaderContainer
    render={({ isSideNavExpanded, onClickSideNavExpand }) => (
      <Header aria-label="Carbon Tutorial">
        {/* <SkipToContent /> */}
        <HeaderName element={Link} to="/restaurants" prefix="">
          Restaurants
        </HeaderName>
        <HeaderGlobalBar>
          <Link to="/login">
            <HeaderGlobalAction aria-label="Login" tooltipAlignment="start">
              Login
            </HeaderGlobalAction>
          </Link>
        </HeaderGlobalBar>
      </Header>
    )}
  />
);

export default RestaurantHeader;
