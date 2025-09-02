import axios from "axios";
import { AuthAction } from "./authReducer";

import setAuthToken from "../../Utils/setAuthToken";

export const signin = (email, password) => async (dispatch) => {
  try {
    dispatch(AuthAction.loginRequest());

    const user = await axios.post(process.env.REACT_APP_API + "/login", {
      email,
      password,
    });
    localStorage.setItem("jwtToken", user.data.token);
    localStorage.setItem("id", user.data.data.id);
    localStorage.setItem("email", user.data.data.email);
    localStorage.setItem("role", user.data.data.role.nameEn);
    window.location.href = "/payment";
    dispatch(AuthAction.loginSuccess(user.data));
  } catch (error) {
    dispatch(AuthAction.loginFailure(error.response.data.message));
  }
};

export const signup = (data) => async (dispatch) => {
    try {
      dispatch(AuthAction.loginRequest());

      const formData = new FormData();
      if (data.imgUrl) {
        formData.append("imgUrl", data.imgUrl);
      }
      formData.append("email", data.email);
      formData.append("fullName", data.fullName);
      formData.append("phoneNumber", data.phoneNumber);
      formData.append("gender", data.gender);
      formData.append("dateOfBirthday", data.dateOfBirthday);
      formData.append("locationId", data.locationId);
      formData.append("password", data.password);

      const user = await axios.post(
        process.env.REACT_APP_API + "/register",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      window.location.href = "/login";
      dispatch(AuthAction.loginSuccess(user.data));
    } catch (error) {
      dispatch(
        AuthAction.loginFailure(
          error.response?.data?.message || "Signup failed"
        )
      );
    }
};

export const signout = () => async () => {
  localStorage.removeItem("id");
  localStorage.removeItem("jwtToken");
  localStorage.removeItem("email");
  localStorage.removeItem("role");
  setAuthToken(false);
  window.location.href = "/login";
};

export const forgotPassword = (email) => async () => {
  try {
    await axios.put(process.env.REACT_APP_API + "/forgetPassword", { email });
  } catch (error) {
    alert(error);
  }
};

export const resetPassword = (oldPassword, newPassword) => async () => {
  try {
    await axios.put(process.env.REACT_APP_API + "/changePassword", {
      oldPassword,
      newPassword,
    });
  } catch (error) {
    alert(error);
  }
};