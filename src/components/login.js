import React, { Component, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setpassword] = useState("");

  const navigate = useNavigate();

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePassword = (password) => {
    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return passwordRegex.test(password);
  };

  const validate = () => {
    if (!validateEmail(username)) {
      alert("Invalid email format");
      return false;
    }

    if (!validatePassword(password)) {
      alert("Invalid password format");
      return false;
    }
    return true;
  };

  const login_api = (e) => {
    e.preventDefault();
    if (validate()) {
      const formData = new FormData();
      formData.append("username", username);
      formData.append("password", password);
      formData.append("grant_type", "password");

      axios
        .post("https://apiv2stg.promilo.com/user/oauth/token", formData)
        .then((response) => {
          navigate("/home");
        })
        .catch((error) => {
          navigate("/home");
          console.error("Error making token request:", error);
        });
    }
  };

  return (
    <div className="container ml-auto mr-auto mt-5" style={{width:'400px'}}>
      <div className="alert alert-info text-center ">Login</div>
      <form>
        <div className="form-group">
          <label for="exampleInputEmail1">Email address</label>
          <input
            type="email"
            className="form-control"
            id="email"
            aria-describedby="emailHelp"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <small id="emailHelp" className="form-text text-muted">
            We'll never share your email with anyone else.
          </small>
        </div>
        <div className="form-group">
          <label for="exampleInputPassword1">Password</label>
          <input
            type="password"
            className="form-control"
            id="password"
            value={password}
            onChange={(e) => setpassword(e.target.value)}
          />
        </div>

        <button
          type="submit"
          className="btn btn-primary mt-2"
          onClick={login_api}
        >
          Submit
        </button>
      </form>
    </div>
  );
};
export default Login;
