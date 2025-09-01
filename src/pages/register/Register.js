//frontend React Register
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

// Redux
import { signup } from "../../redux/auth/authAction";
import { getLocations } from "../../redux/location/locationAction";

// Utils
import isAuth from "../../Utils/isAuth";

// Styles
import "./Register.css";

const Register = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { t } = useTranslation();

  const { loading, error } = useSelector((state) => state.authReducer);
  const { locations } = useSelector((state) => state.locationsReducer);

  const [imgUrl, setImgUrl] = useState(null);
  const [fullName, setFullName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [gender, setGender] = useState("");
  const [dateOfBirthday, setDateOfBirthday] = useState("");
  const [locationId, setLocationId] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [repeatPassword, setRepeatPassword] = useState("");
  const [showRepeatPassword, setShowRepeatPassword] = useState(false);

  useEffect(() => {
    if (isAuth(dispatch)) {
      navigate("/payment");
    }
  }, [dispatch, navigate]);

  useEffect(() => {
    dispatch(getLocations());
  }, [dispatch]);

  const handleSignUp = (e) => {
    e.preventDefault();
    dispatch(
      signup(
        imgUrl,
        password,
        fullName,
        phoneNumber,
        gender,
        dateOfBirthday,
        locationId,
        email
      )
    );
  };

  return (
    <div className="register-container">
      <div className="register-card">
        <h2 className="register-title">{t("register.register")}</h2>

        {error && <div className="register-error">{error}</div>}
        {loading && (
          <div className="register-loading">{t("register.loading")}...</div>
        )}

        <form onSubmit={handleSignUp} className="register-form">
          <div className="form-group">
            <label>{t("register.profileImage")}</label>
            <input
              type="file"
              accept="image/*"
              onChange={(e) => setImgUrl(e.target.files[0])}
            />
          </div>

          <div className="form-group">
            <label>{t("register.fullName")}</label>
            <input
              type="text"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label>{t("register.phoneNumber")}</label>
            <input
              type="text"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label>{t("register.gender")}</label>
            <select
              value={gender}
              onChange={(e) => setGender(e.target.value)}
              required
            >
              <option value="" disabled>
                {t("register.select")}
              </option>
              <option value="Male">{t("register.male")}</option>
              <option value="Female">{t("register.female")}</option>
            </select>
          </div>

          <div className="form-group">
            <label>{t("register.dateOfBirthday")}</label>
            <input
              type="date"
              value={dateOfBirthday}
              onChange={(e) => setDateOfBirthday(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label>{t("register.location")}</label>
            <select
              value={locationId}
              onChange={(e) => setLocationId(e.target.value)}
              required
            >
              <option value="" disabled>
                {t("register.select")}
              </option>
              { locations?.data?.map((location) => (
                <option key={location.id} value={location.id}>
                  { (localStorage.getItem("selectedLanguage") === "en") ? location.nameEn : location.nameEn }
                </option>
              ))}
            </select>
          </div>

          <div className="form-group">
            <label>{t("register.email")}</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder={t("register.Enter your email")}
            />
          </div>

          <div className="form-group">
            <label>{t("register.password")}</label>
            <div className="password-wrapper">
              <input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                placeholder={t("register.Enter your password")}
              />
              <span
                className="toggle-password"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? t("register.hide") : t("register.show")}
              </span>
            </div>
          </div>

          <div className="form-group">
            <label>{t("register.repeatPassword")}</label>
            <div className="password-wrapper">
              <input
                type={showRepeatPassword ? "text" : "password"}
                value={repeatPassword}
                onChange={(e) => setRepeatPassword(e.target.value)}
                required
                placeholder={t("register.Enter your password")}
              />
              <span
                className="toggle-password"
                onClick={() => setShowRepeatPassword(!showRepeatPassword)}
              >
                {showRepeatPassword ? t("register.hide") : t("register.show")}
              </span>
            </div>
          </div>

          {repeatPassword && repeatPassword !== password && (
            <p className="error-message">{t("register.passwordMismatch")}</p>
          )}

          <button type="submit" disabled={loading}>
            {loading ? t("register.registering") : t("register.register")}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
