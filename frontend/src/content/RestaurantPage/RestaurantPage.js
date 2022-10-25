import React, { useState, useEffect } from "react";
import RestaurantDataService from "../../services/restaurant";
import { Link } from "react-router-dom";
import { TextArea } from "@carbon/react";

const Restaurant = (props) => {
  const initialRestaurantState = {
    id: null,
    name: "",
    address: {},
    cuisine: "",
    reviews: [],
  };
  const [reviews, setReviews] = useState([]);
  const [review, setReview] = useState("");
  const [restaurant, setRestaurant] = useState(initialRestaurantState);
  const [addReview, setAddReview] = useState(false);
  const getRestaurant = (id) => {
    RestaurantDataService.get(id)
      .then((response) => {
        setRestaurant(response.data);
        console.log(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const saveReview = () => {
    if (review === "") {
      return;
    }
    var data = {
      text: review,
      // name: props.user.name,
      // user_id: props.user.id,
      restaurant_id: props.match.params.id,
    };

    RestaurantDataService.createReview(data)
      .then((response) => {
        setReviews(reviews.concat(review));
        setRestaurant({ ...restaurant, reviews: reviews });
        setReview("");
      })
      .catch((e) => {
        console.log(e);
      });
  };

  useEffect(() => {
    getRestaurant(props.match.params.id);
  }, [props.match.params.id]);

  const deleteReview = (reviewId, index) => {
    RestaurantDataService.deleteReview(reviewId, props.user.id)
      .then((response) => {
        setRestaurant((prevState) => {
          prevState.reviews.splice(index, 1);
          return {
            ...prevState,
          };
        });
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <div>
      {restaurant ? (
        <div>
          <h1>{restaurant.name}</h1>
          <h5>
            <strong>Cuisine: </strong>
            {restaurant.cuisine}
            <br />
            <strong>Address: </strong>
            {restaurant.address.building} {restaurant.address.street},{" "}
            {restaurant.address.zipcode}
          </h5>
          <div
            style={{
              marginTop: "1rem",
              marginBottom: "1rem",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <h3> Reviews </h3>
            <div>
              <button
                onClick={() => {
                  setAddReview(!addReview);
                }}
                style={{
                  fontSize: "15px",
                  border: "1px solid gray",
                  borderRadius: "5px",
                  padding: "20px 10px",
                  background: "rgba(211,211,211)",
                }}
              >
                Add Review
              </button>
            </div>
          </div>
          {addReview ? (
            <div>
              <TextArea
                onChange={(e) => {
                  setReview(e.target.value);
                }}
                value={review}
                id="review-text-area"
                invalidText="A valid value is required"
                labelText="Add a review"
                placeholder={`You can write what you liked and what you didn't like about ${restaurant.name}`}
              />
              <button
                onClick={saveReview}
                style={{
                  margin: "20px 0px",
                  padding: "7px 25px",
                  background: "rgba(211,211,211)",
                  fontWeight: 600,
                }}
              >
                Submit
              </button>
            </div>
          ) : null}

          <div>
            {reviews.length > 0 ? (
              reviews.map((review, index) => {
                return (
                  <div
                    style={{
                      maxHeight: "20%",
                      marginTop: "20px",
                      padding: "10px 20px",
                      background: "rgba(211,211,211, 0.2)",
                      boxShadow: "2px 1px rgba(211,211,211)",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                      }}
                    >
                      <p>
                        <strong>Rahul Patil</strong>
                      </p>
                      <p>Oct 9 2022</p>
                    </div>
                    <p
                      style={{
                        margin: "15px 0",
                      }}
                    >
                      {review}
                    </p>
                    <div
                      style={{
                        gap: "8px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "end",
                      }}
                    >
                      <button
                        style={{
                          borderRadius: "4px",
                          padding: "4px 8px",
                          border: "none",
                          background: "rgb(84,180,235)",
                        }}
                      >
                        Update
                      </button>
                      <button
                        style={{
                          borderRadius: "4px",
                          padding: "4px 8px",
                          border: "none",
                          background: "rgb(212,32,80)",
                        }}
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                );
              })
            ) : (
              <div>
                <p>No reviews yet.</p>
              </div>
            )}
          </div>
        </div>
      ) : (
        <div>
          <br />
          <p>No restaurant selected.</p>
        </div>
      )}
    </div>
  );
};

export default Restaurant;
