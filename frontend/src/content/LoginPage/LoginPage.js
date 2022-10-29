import React, { useState, useContext } from "react";
import { UserContext } from "../../model/user-context";

const LoginPage = (props) => {
  const initialUserState = {
    name: "",
    id: "",
  };
  const [userInfo, setUserInfo] = useState(initialUserState);
  const [user, setUser] = useContext(UserContext);
  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setUserInfo({ ...userInfo, [id]: value });
  };

  const login = () => {
    setUser(userInfo);
    props.history.push("/");
  };
  return (
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
          name="id"
          id="id"
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
  );
};

export default LoginPage;
