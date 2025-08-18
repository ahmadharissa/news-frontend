import axios from "axios";
import { locationsAction } from "./locationReducers";

export const getLocations = () => async (dispatch) => {
  dispatch(locationsAction.fetchLocationsRequest());
  try {
    let response = await axios.get(
      prccess.env.REACT_APP_API + "/location/getLocations"
    );
    dispatch(locationsAction.fetchLocationsSuccess(response?.data));
  } catch (error) {
    dispatch(locationsAction.fetchLocationsFail(error.message));
  }
};
