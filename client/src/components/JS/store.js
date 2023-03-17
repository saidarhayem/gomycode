import { configureStore } from '@reduxjs/toolkit'
import productSlice from './productSlice/productSlice'
import userSlice from './userSlice/userSlice'
import orderSlice from './OrderSlice/orderSlice'
export const store = configureStore({
  reducer: {
    user:userSlice,
    product:productSlice,
    order:orderSlice,
  },
})