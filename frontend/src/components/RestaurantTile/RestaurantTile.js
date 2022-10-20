import React from "react";
import "./restaurant_tile.scss";
import { Link } from "react-router-dom";
const RestaurantTile = ({ restaurant }) => {
  return (
    <div className="restaurant-tile">
      <h1 className="restaurant-name">{restaurant.name}</h1>
      <address className="restaurant-address">
        <b style={{ fontWeight: 600 }}>Cuisine : </b> {restaurant.cuisine}
      </address>
      <address className="restaurant-address">
        <b style={{ fontWeight: 600 }}>Address : </b>{" "}
        {restaurant.address.building} {restaurant.address.street},{" "}
        {restaurant.address.zipcode}
      </address>
      <div className="restaurant-buttons">
        <Link to={`/restaurants/${restaurant._id}`}>
          <button>View</button>
        </Link>
        <button>Get Map</button>
      </div>
    </div>
  );
};

export default RestaurantTile;
