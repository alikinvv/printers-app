import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { API_KEY, API_URL, CLIENT_ID } from './api'

export const baseApi = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({
        baseUrl: API_URL,
        prepareHeaders: (headers) => {
            headers.set('Client-Id', CLIENT_ID)
            headers.set('Api-Key', API_KEY)

            return headers
        },
    }),
    endpoints: () => ({}),
})
