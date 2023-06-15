import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const api = createApi({
  reducerPath: "accountApi",
  baseQuery: fetchBaseQuery({ baseUrl: `${process.env.REACT_APP_API_SERVER_URL}/api` }),
  tagTypes: ["account"],
  endpoints: (builder) => ({
    getAccount: builder.query({
      query: () => `my/account`,
      providesTags: (result, error, arg) => [{ type: "account" }]
    }),
    editAccount: builder.mutation({
      query: ({ patchData }) => {
        return {
          url: `my/account`,
          method: "PATCH",
          body: { patchData }
        };
      },
      invalidatesTags: (result, error, arg) => [{ type: "account" }]
    }),
  })
});

export default api;