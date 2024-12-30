import { createSlice } from "@reduxjs/toolkit";


export const searchSlice = createSlice({
  name: "search",
  initialState: {
    value: []
  },
  reducers: {
    setReduxSearch: (state, action) => {
        state.value = action.payload;    
      }
   
  },
});

export const { setReduxSearch } = searchSlice.actions;

export default searchSlice.reducer;
