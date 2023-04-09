import {configureStore} from "@reduxjs/toolkit"
import { showItemsCartReducer } from "./features/slices/showItemsCartSlice"
import { apiProduct } from "./features/api/Api"
export const store = configureStore({
  reducer:{
    showItemsCart: showItemsCartReducer,
    [apiProduct.reducerPath]: apiProduct.reducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(apiProduct.middleware)
})


export type RootState = ReturnType<typeof store.getState>