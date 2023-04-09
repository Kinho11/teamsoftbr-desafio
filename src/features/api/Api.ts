import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IProduct } from "../../utils/interface/itemInterface";

export const apiProduct = createApi({
  reducerPath: "apiProduct",
  baseQuery: fetchBaseQuery({baseUrl:"https://6077803e1ed0ae0017d6aea4.mockapi.io/test-frontend/"}),
  endpoints: (builder) => ({
    getAllProducts: builder.query<IProduct[] | undefined, void>({
      query: () => "products"
    })
  })
})

export const {useGetAllProductsQuery} = apiProduct
