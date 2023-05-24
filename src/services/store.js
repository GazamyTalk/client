import { configureStore } from "@reduxjs/toolkit";
import mainApi from "./friends/api";

const store = configureStore({
    reducer: {
        [mainApi.reducerPath]: mainApi.reducer
    },
    middleware: (getDefaultMiddleware) => {
        getDefaultMiddleware({}).concat([api.middleware])
        // getDefaultMiddleware().concat(api.middleware)
    }
});

export default store;