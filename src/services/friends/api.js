import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const api = createApi({
  reducerPath: "mainApi",
  baseQuery: fetchBaseQuery({ baseUrl: `${process.env.REACT_APP_API_SERVER_URL}/api` }),
  tagTypes: ["mainApi"],
  endpoints: (builder) => ({
    getFriends: builder.query({
      query: () => `my/friends`,
      providesTags: (result, error, arg) => {
        return [{ type: "mainApi", id: "friends" }];
      }
    }),
    addFriend: builder.mutation({
      query: ({ username }) => {
        return {
          url: `my/friends`,
          method: "POST",
          body: { username }
        };
      },
      invalidatesTags: (result, error, arg) => [{ type: "mainApi", id: "friends" }]
    }),
    delFriend: builder.mutation({
        query: ({ username }) => {
            return {
                url: 'my/friends',
                method: "DELETE",
                body: { username }
            }
        },
        invalidatesTags: (result, error, arg) => [{ type: "mainApi", id: "friends" }]
    }),

    getAccount: builder.query({
      query: () => 'my/account',
      providesTags: (result, error, arg) => {
        return [{ type: "mainApi", id: "account" }]
      }
    })
  })
});

export default api;