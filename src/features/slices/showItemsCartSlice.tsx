import { createSlice } from "@reduxjs/toolkit"

interface CounterState {
  clickButton: boolean
}

const initialState: CounterState = {
  clickButton: false
}

export const ShowItemsCartSlice = createSlice({
  name: "showItemsCart",
  initialState,
  reducers: {
    showItemsCart(state) {
      console.log('dsasdas');
      state.clickButton = true
    },
  }
})

export const {showItemsCart} = ShowItemsCartSlice.actions
export const showItemsCartReducer = ShowItemsCartSlice.reducer