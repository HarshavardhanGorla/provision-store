import React, { Component } from "react";
import { useNavigate } from "react-router-dom";
import Logo from "../assets/logo.png";

const NavBar = () => {
  const navigate = useNavigate();

  return (
    <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
      <a class="navbar-brand disabled" href="#">
        <img width={60} height={40} src={Logo} alt="logo" />
      </a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item active" onClick={() => navigate("/home")}>
            <button className="btn btn-primary">Home</button>
          </li>
          <li class="nav-item" onClick={() => navigate("/about")}>
            <button className="btn btn-primary">about</button>
          </li>
          <li class="nav-item" onClick={() => navigate("/")}>
            <button className="btn btn-primary">logout</button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
