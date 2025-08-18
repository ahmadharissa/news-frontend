import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  locations: [],
  locationsLoading: false,
  locationsError: "",
};

const locationsSlice = createSlice({
  name: "Locations",
  initialState,
  reducers: {
    fetchLocationsRequest(state) {
      state.locationsLoading = true;
      state.locations = [];
      state.locationsError = "";
    },

    fetchLocationsSuccess(state, action) {
      state.locationsLoading = false;
      state.locations = action.payload;
      state.locationsError = "";
    },

    fetchLocationsFail(state, action) {
      state.locationsLoading = false;
      state.locations = [];
      state.locationsError = action.payload;
    },
  },
});

export const locationsAction = locationsSlice.actions;
export default locationsSlice;
