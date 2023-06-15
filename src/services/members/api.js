import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const api = createApi({
  reducerPath: "friendApi",
  baseQuery: fetchBaseQuery({ baseUrl: `${process.env.REACT_APP_API_SERVER_URL}/api` }),
  tagTypes: ["members"],
  endpoints: (builder) => ({
    getMembers: builder.query({
      query: ({ roomid }) => {
        return {
          url: `my/members`,
          query: { roomid }
        }
      },
      providesTags: (result, error, { roomid }) => {
        return [{ type: "members", roomid }];
      }
    }),
    addMembers: builder.mutation({
      query: ({ roomid, usernames }) => {
        return {
          url: `my/members`,
          method: "POST",
          body: { roomid, username: usernames.join(',') }
        };
      },
      invalidatesTags: (result, error, { roomid }) => {
        return [{ type: "members", roomid }]
      }
    }),
  })
});

export default api;