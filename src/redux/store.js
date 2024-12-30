import { configureStore } from '@reduxjs/toolkit'
import userReducer from './slice/userSlice'
import bookReducer from './slice/bookSlice';
import searchReducer from "./slice/searchSlice"

export default configureStore({
  reducer: {
    user: userReducer,
    book: bookReducer,
    search: searchReducer
  },
})