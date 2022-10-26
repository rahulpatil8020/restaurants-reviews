import React, { useState } from "react";
import { UserContext } from "../../model/user-context";

const LoginPage = (props) => {
  const initialUserState = {
    name: "",
    username: "",
    userId: "",
  };
  const [user, setUser] = useState(initialUserState);

  const handleInputChange = (e) => {
    const { key, value } = e.target;
    setUser({ ...user, [key]: value });
  };

  const login = () => {
    props.history.push("/");
  };
  return (
    <UserContext.Provider value={user}>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <div>
          <label
            style={{
              display: "block",
            }}
          >
            {" "}
            Name{" "}
          </label>
          <input
            required
            style={{
              margin: "8px 0",
              borderRadius: "3px",
              height: "30px",
            }}
            type="text"
            name="name"
            id="name"
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label
            style={{
              display: "block",
            }}
          >
            Username{" "}
          </label>
          <input
            required
            style={{
              margin: "8px 0",
              borderRadius: "3px",
              height: "30px",
            }}
            type="text"
            name="username"
            id="username"
            onChange={handleInputChange}
          />
        </div>
        <button
          onClick={login}
          style={{
            marginTop: "5px",
            borderRadius: "5px",
            height: "20px",
            width: "7rem",
          }}
        >
          Login
        </button>
      </div>
    </UserContext.Provider>
  );
};

export default LoginPage;
