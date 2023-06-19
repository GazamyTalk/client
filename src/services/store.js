import { configureStore } from "@reduxjs/toolkit";
// import accountApi from "./account/api";
// import friendApi from "./friends/api";
// import memberApi from "./members/api";
// import roomApi from "./rooms/api";
import mainApi from "./mainApi/api";

const store = configureStore({
    reducer: {
        // [accountApi.reducerPath]: accountApi.reducer,
        // [friendApi.reducerPath]: friendApi.reducer,
        // [memberApi.reducerPath]: memberApi.reducer,
        // [roomApi.reducerPath]: roomApi.reducer,
        [mainApi.reducerPath]: mainApi.reducer
    },
    middleware: (getDefaultMiddleware) => {
        return getDefaultMiddleware().concat(
            // accountApi.middleware,
            // friendApi.middleware,
            // memberApi.middleware,
            // roomApi.middleware,
            mainApi.middleware
        )
    }
});

export default store;