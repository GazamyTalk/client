import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const api = createApi({
  reducerPath: "friendApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${process.env.REACT_APP_API_SERVER_URL}/api`,
    credentials: 'include'
  }),
  tagTypes: ["friends"],
  endpoints: (builder) => ({
    getFriends: builder.query({
      query: () => `my/friends`,
      providesTags: (result, error, arg) => {
        return [{ type: "friends" }];
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
      invalidatesTags: (result, error, arg) => [{ type: "friends" }, { type: "rooms" }]
    }),
    delFriend: builder.mutation({
        query: ({ username }) => {
            return {
                url: 'my/friends',
                method: "DELETE",
                body: { username }
            }
        },
        invalidatesTags: (result, error, arg) => [{ type: "friends" }, { type: "rooms" }]
    }),
  })
});

export default api;