import {configureStore} from "@reduxjs/toolkit"
import { counterReducer } from "./features/counter/CounterSlice"
import { apiProduct } from "./features/api/Api"
export const store = configureStore({
  reducer:{
    counter: counterReducer,
    [apiProduct.reducerPath]: apiProduct.reducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(apiProduct.middleware)
})


export type RootState = ReturnType<typeof store.getState>