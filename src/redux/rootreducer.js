import { combineReducers } from "redux";

//reducer
import AuthSlice from "./auth/authReducer";
import locationsSlice from "./location/locationReducer";

const RootReducer = combineReducers({
  authReducer: AuthSlice.reducer,
  locationsReducer: locationsSlice.reducer,
});

export default RootReducer;
