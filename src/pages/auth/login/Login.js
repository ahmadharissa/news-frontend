import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

// Redux
import { signin } from "../../../redux/auth/authAction";

// Utils
import isAuth from "../../../Utils/isAuth";

// Styles
import "./Login.css";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { t } = useTranslation();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const { loading, error } = useSelector((state) => state.authReducer);

  useEffect(() => {
    if (isAuth(dispatch)) {
      navigate("/payment");
    }
  }, [dispatch, navigate]);

  const handleSignin = (e) => {
    e.preventDefault();
    dispatch(signin(email, password));
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <h2 className="login-title">{t("login.login")}</h2>
        {error && <div className="login-error">{error}</div>}
        {loading && (
          <div className="login-loading">{t("login.loading")}...</div>
        )}
        <form onSubmit={handleSignin} className="login-form">
          <div className="form-group">
            <label htmlFor="email">{t("login.email")}:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder={t("login.Enter your email")}
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">{t("login.password")}:</label>
            <div className="password-wrapper">
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                placeholder={t("login.Enter your password")}
              />
              <span
                className="toggle-password"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? t("login.hide") : t("login.show")}
              </span>
            </div>
          </div>
          <Link
            to="/forgetPassword"
            style={{
              textDecoration: "none",
              textAlign: "center",
              color: "blue",
            }}
          >
            {t("login.forgetPassword")}
          </Link>
          <button type="submit" disabled={loading}>
            {loading ? t("login.logging") : t("login.login")}
          </button>

          <hr />
          <Link
            to="/register"
            style={{
              textDecoration: "none",
              textAlign: "center",
              color: "blue",
            }}
          >
            {t("login.register")}
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Login;
