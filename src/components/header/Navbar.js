import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";

// Assets
import logo from "../../assets/images/logo.png";
import LanguageSwitcher from "../../assets/languages/languageSwitcher.js";

// Utils
import isAuth from "../../Utils/isAuth.js";

// Redux
import { signout } from "../../redux/auth/authAction.js";

import "./Navbar.css";

function Navbar() {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const authenticated = isAuth(dispatch); // if isAuth requires dispatch

  const handleLogout = () => {
    dispatch(signout());
  };

  return (
    <div className="navbar-container">
      <nav
        className="navbar navbar-expand-lg navbar-dark sticky-top"
        style={{ backgroundColor: "#000000" }}
      >
        <div className="container-fluid">
          <Link to="/home" className="navbar-brand">
            <img src={logo} alt="GCB" />
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link to="/payment" className="nav-link">
                  {t("navbar.payment")}
                </Link>
              </li>

              {authenticated ? (
                <li className="nav-item">
                  <button
                    className="nav-link btn btn-link"
                    onClick={handleLogout}
                  >
                    {t("navbar.logout")}
                  </button>
                </li>
              ) : (
                <li className="nav-item">
                  <Link to="/login" className="nav-link">
                    {t("navbar.login or register")}
                  </Link>
                </li>
              )}

              <li className="nav-item language-switcher">
                <LanguageSwitcher />
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
