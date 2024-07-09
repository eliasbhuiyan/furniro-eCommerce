import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  product: JSON.parse(localStorage.getItem("product")) || [],
}

const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const existingProduct = state.product.find((item)=> item.id === action.payload.id)
      console.log(existingProduct);
      if (existingProduct) {
          existingProduct.quantity = existingProduct.quantity + action.payload.quantity,
          existingProduct.total = existingProduct.quantity + action.payload.quantity * existingProduct.price
          localStorage.setItem("product", JSON.stringify(state.product))
        }
      else{
        state.product.push(action.payload)
        localStorage.setItem("product", JSON.stringify(state.product))
      }
    
    },
    removeFromCart: (state, action) => {
      state.product = state.product.filter((item)=> item.id !== action.payload)
      localStorage.setItem("product", JSON.stringify(state.product))
    }
  },
})

export const { addToCart,removeFromCart } = productSlice.actions

export default productSlice.reducer