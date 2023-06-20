import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const api = createApi({
    reducerPath: "mainApi",
    baseQuery: fetchBaseQuery({
        baseUrl: `${process.env.REACT_APP_API_SERVER_URL}/api`,
        credentials: 'include'
    }),
    tagTypes: ["account", "friends", "members", "rooms", "othersUserInfo"],
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

        getMembers: builder.query({
            query: ({ roomid }) => {
                return {
                    url: `my/members`,
                    params: { roomid }
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

        getOtherUserInfo: builder.query({
            query: ({ username }) => ({
                url: 'others/users',
                method: 'GET',
                params: { username }
            }),
            providesTags: (result, error, { username }) => {
                return [{ type: "othersUserInfo", username }]
            }
        })
    }),
});

export default api;