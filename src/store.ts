import {configureStore} from "@reduxjs/toolkit"
// import { showItemsCartReducer } from "./features/slices/showItemsCartSlice"
import CartReducer from "./features/slices/cartSlice"
import { apiProduct } from "./features/api/Api"

export const store = configureStore({
  reducer:{
    cart: CartReducer,
    [apiProduct.reducerPath]: apiProduct.reducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(apiProduct.middleware)
})


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;