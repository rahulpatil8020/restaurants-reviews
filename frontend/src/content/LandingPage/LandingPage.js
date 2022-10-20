import React, { useState, useEffect } from "react";
import RestaurantDataService from "../../services/restaurant";
import { Link } from "react-router-dom";
import { Pagination } from "@carbon/react";
import { useHistory } from "react-router";
import RestaurantTile from "../../components/RestaurantTile/RestaurantTile";
import "./_landing-page.scss";

const LandingPage = (props) => {
  const [totalRestaurants, setTotalRestaurants] = useState(0);
  const [restaurants, setRestaurants] = useState([]);
  const [searchName, setSearchName] = useState("");
  const [searchZip, setSearchZip] = useState("");
  const [searchCuisine, setSearchCuisine] = useState("");
  const [cuisines, setCuisines] = useState(["All Cuisines"]);
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);

  useEffect(() => {
    retrieveRestaurants({ page: 1, pageSize: 10 });
    retrieveCuisines();
  }, []);

  const history = useHistory();

  const onChangeSearchName = (e) => {
    const searchName = e.target.value;
    setSearchName(searchName);
  };

  const onChangeSearchZip = (e) => {
    const searchZip = e.target.value;
    setSearchZip(searchZip);
  };

  const onChagneSearchCuisine = (e) => {
    const searchCuisine = e.target.value;
    setSearchCuisine(searchCuisine);
  };

  const retrieveRestaurants = (e) => {
    history.push(
      `${props.location.pathname}?page=${e.page}&pageSize=${e.pageSize}`
    );
    RestaurantDataService.getAll(e?.page, e?.pageSize)
      .then((response) => {
        setTotalRestaurants(response.data.total_results);
        setRestaurants(response.data.restaurants);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const retrieveCuisines = () => {
    RestaurantDataService.getCuisines()
      .then((response) => {
        setCuisines(["All Cuisines"].concat(response.data));
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const refreshList = () => {
    retrieveRestaurants();
  };

  const find = (query, by) => {
    RestaurantDataService.find(query, by)
      .then((response) => {
        console.log(response.data);
        setRestaurants(response.data.restaurants);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const findByName = () => {
    find(searchName, "name");
  };

  const findByZip = () => {
    find(searchZip, "zipcode");
  };

  const findByCuisine = () => {
    if (searchCuisine === "All Cuisines") {
      refreshList();
    } else {
      find(searchCuisine, "cuisine");
    }
  };
  return (
    <div>
      <Pagination
        onChange={(e) => {
          setPage(e.page);
          setPageSize(e.pageSize);
          retrieveRestaurants(e);
        }}
        backwardText="Previous page"
        forwardText="Next page"
        itemsPerPageText="Restaurants per page:"
        page={1}
        pageNumberText="Page Number"
        pageSize={10}
        pageSizes={[10, 20, 30, 40, 50]}
        totalItems={totalRestaurants}
      />

      <div className="restaurants-list">
        {restaurants.map((restaurant) => {
          return <RestaurantTile restaurant={restaurant} />;
        })}
      </div>
    </div>
  );
};

export default LandingPage;
