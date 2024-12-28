import { configureStore } from '@reduxjs/toolkit'
import userReducer from './slice/userSlice'
import bookReducer from './slice/bookSlice';

export default configureStore({
  reducer: {
    user: userReducer,
    book: bookReducer
  },
})