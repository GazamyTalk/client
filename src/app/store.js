import { configureStore } from "@reduxjs/toolkit";
import mainApi from "../features/mainApi/api";

const store = configureStore({
    reducer: {
        [mainApi.reducerPath]: mainApi.reducer
    },
    middleware: (getDefaultMiddleware) => {
        getDefaultMiddleware().concat(api.middleware)
    }
});

export default store;