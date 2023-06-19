import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const api = createApi({
  reducerPath: "roomApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${process.env.REACT_APP_API_SERVER_URL}/api`,
    credentials: 'include'
  }),
  tagTypes: ["rooms"],
  endpoints: (builder) => ({
    getRooms: builder.query({
      query: () => `my/rooms`,
      providesTags: (result, error, arg) => {
        return [{ type: "rooms" }];
      }
    }),
    addRoom: builder.mutation({
      query: ({ roomid }) => {
        return {
          url: `my/rooms`,
          method: "POST",
          body: roomid ? { roomid } : roomid
        };
      },
      invalidatesTags: (result, error, arg) => [{ type: "rooms" }]
    }),
    editRoom: builder.mutation({
        query: ({ roomid, patchData }) => {
            return {
                url: 'my/rooms',
                method: "PATCH",
                body: { roomid, patchData }
            }
        },
        invalidatesTags: (result, error, arg) => [{ type: "rooms" }]
    }),
    delRoom: builder.mutation({
        query: ({ roomid }) => {
            return {
                url: 'my/rooms',
                method: "DELETE",
                body: { roomid }
            }
        },
        invalidatesTags: (result, error, arg) => [{ type: "rooms" }]
    }),
  })
});

export default api;