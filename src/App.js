import React, { useState } from "react";
import Login from "./components/login";
import Productpage from "./components/productpage";
import NavBar from "./components/navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./components/about";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <NavBar />

        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Productpage />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
