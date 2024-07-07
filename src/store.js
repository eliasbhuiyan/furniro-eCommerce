import { configureStore } from '@reduxjs/toolkit'
import productSlice from './reducer/productSlice'

export const store = configureStore({
  reducer: {
    cartList: productSlice,
  },
})