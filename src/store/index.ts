import { configureStore } from '@reduxjs/toolkit'
import { baseApi } from 'services/baseApi'

import product from './product/product'
import file from './files/files'

export const store = configureStore({
    reducer: {
        [baseApi.reducerPath]: baseApi.reducer,
        product,
        file,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }).concat([baseApi.middleware]),
})

export * from './product'
export * from './files'
