import { createSlice } from "@reduxjs/toolkit";

const loadFromLocalStorage = () => {
  const storedData = localStorage.getItem("bookedCabins");
  return storedData ? JSON.parse(storedData) : [];
};

export const bookSlice = createSlice({
  name: "book",
  initialState: {
    value: loadFromLocalStorage(),
  },
  reducers: {
    setReduxBook: (state, action) => {
      let found = state.value.find((el) => el?._id === action.payload?._id);

      if (!found) {
        state.value.push(action.payload);
        localStorage.setItem("bookedCabins", JSON.stringify(state.value));
      }
    },
    unsetReduxBook: (state, action) => {
      state.value = state.value.filter((el) => el._id !== action.payload._id);
      localStorage.setItem("bookedCabins", JSON.stringify(state.value));
    },
    bookReset: (state, action) => {
      state.value = [];
    },
  },
});

export const { setReduxBook, unsetReduxBook, bookReset } = bookSlice.actions;

export default bookSlice.reducer;
