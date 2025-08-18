import { combineReducers } from "redux";

//reducer
import AuthSlice from "./auth/authReducer";

const RootReducer = combineReducers({
  authReducer: AuthSlice.reducer,
});

export default RootReducer;
