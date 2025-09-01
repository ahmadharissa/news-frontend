import React, { useLayoutEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";

// Pages
import Home from "./home/Home.js";
import Login from "./login/Login.js";
import Register from "./register/Register.js";

// Components
import Navbar from "../components/header/Navbar.js";
import ComingSoon from "../components/comingSoon/ComingSoon.js";
import Footer from "../components/footer/Footer.js";

// Utils
import isAuth from "../Utils/isAuth.js";

const PrivateRoute = ({ element, authenticated }) => {
  return authenticated ? element : <Login />;
};

function PageSwitch() {
  const dispatch = useDispatch();
  const authenticated = isAuth(dispatch);
  const location = useLocation();

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login /> } />
        <Route path="/register" element={<Register />} />
        <Route
          path="/payment"
          element={<PrivateRoute authenticated={authenticated} element={<ComingSoon />} />}
        />
      </Routes>
      <Footer />
    </>
  );
}

export default PageSwitch;
