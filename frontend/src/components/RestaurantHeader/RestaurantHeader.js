import React, { useContext } from "react";
import {
  Header,
  HeaderContainer,
  HeaderName,
  HeaderGlobalBar,
  HeaderGlobalAction,
} from "@carbon/react";
import { Link } from "react-router-dom";
import { UserContext } from "../../model/user-context";

const RestaurantHeader = () => {
  const [user, setUser] = useContext(UserContext);
  console.log(user);
  return (
    <HeaderContainer
      render={({ isSideNavExpanded, onClickSideNavExpand }) => (
        <Header aria-label="Carbon Tutorial">
          {/* <SkipToContent /> */}
          <HeaderName element={Link} to="/restaurants" prefix="">
            Restaurants
          </HeaderName>
          <HeaderGlobalBar>
            {user ? (
              <Link
                onClick={() => {
                  setUser((prevState) => {});
                }}
              >
                <HeaderGlobalAction
                  aria-label="Logout"
                  tooltipAlignment="start"
                >
                  Logout
                </HeaderGlobalAction>
              </Link>
            ) : (
              <Link to="/login">
                <HeaderGlobalAction aria-label="Login" tooltipAlignment="start">
                  Login
                </HeaderGlobalAction>
              </Link>
            )}
          </HeaderGlobalBar>
        </Header>
      )}
    />
  );
};

export default RestaurantHeader;
