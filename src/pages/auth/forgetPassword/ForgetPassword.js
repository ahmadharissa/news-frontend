import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

// Redux
import { forgotPassword } from "../../../redux/auth/authAction";

// Utils
import isAuth from "../../../Utils/isAuth";

// Styles
import "./ForgetPassword.css";

const ForgetPassword = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { t } = useTranslation();

  const [email, setEmail] = useState("");

  useEffect(() => {
    if (isAuth(dispatch)) {
      navigate("/payment");
    }
  }, [dispatch, navigate]);

  const handleSignin = (e) => {
    e.preventDefault();
    dispatch(forgotPassword(email));
    navigate("/login");
  };

  return (
    <div className="forgotPassword-container">
      <div className="forgotPassword-card">
        <h2 className="forgotPassword-title">
          {t("forgotPassword.forgotPassword")}
        </h2>

        <form onSubmit={handleSignin} className="forgotPassword-form">
          <div className="form-group">
            <label htmlFor="email">{t("forgotPassword.email")}:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder={t("forgotPassword.Enter your email")}
            />
          </div>

          <button type="submit">{t("forgotPassword.submit")} </button>
        </form>
      </div>
    </div>
  );
};

export default ForgetPassword;
