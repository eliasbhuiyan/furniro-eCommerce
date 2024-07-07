import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  product: JSON.parse(localStorage.getItem("product")) || [],
}

const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    addToCart: (state, action) => {
       state.product.push(action.payload)

       localStorage.setItem("product", JSON.stringify(state.product))
    },
  },
})

export const { addToCart } = productSlice.actions

export default productSlice.reducer