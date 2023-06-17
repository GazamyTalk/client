import { configureStore } from "@reduxjs/toolkit";
import accountApi from "./account/api";
import friendApi from "./friends/api";
import memberApi from "./members/api";
import roomApi from "./rooms/api";

const store = configureStore({
    reducer: {
        [accountApi.reducerPath]: accountApi.reducer,
        [friendApi.reducerPath]: friendApi.reducer,
        [memberApi.reducerPath]: memberApi.reducer,
        [roomApi.reducerPath]: roomApi.reducer,
    },
    middleware: (getDefaultMiddleware) => 
        getDefaultMiddleware({}).concat([
            accountApi.middleware,
            friendApi.middleware,
            memberApi.middleware,
            roomApi.middleware,
        ])
});

export default store;