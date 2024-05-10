import { configureStore } from '@reduxjs/toolkit'
import { baseApi } from 'services/baseApi'

export const store = configureStore({
    reducer: {
        [baseApi.reducerPath]: baseApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }).concat([baseApi.middleware]),
})
