import { baseApi } from 'services/baseApi'
import {
    IProductImportStocks,
    IProductImportStocksParams,
    IProductInfo,
    IProductList,
} from '.'

const apiWithTags = baseApi.enhanceEndpoints({
    addTagTypes: ['Products'],
})

export const productApi = apiWithTags.injectEndpoints({
    endpoints: ({ query, mutation }) => ({
        getProductList: query<IProductList[], void>({
            query: () => ({
                url: `/v2/product/list`,
                method: 'POST',
            }),
        }),
        getProductInfo: query<IProductInfo[], void>({
            query: () => ({
                url: `/v2/product/info`,
                method: 'POST',
            }),
        }),
        updateProductImportStocks: query<
            IProductImportStocks,
            IProductImportStocksParams
        >({
            query: () => ({
                url: `/v1/product/import/stocks`,
                method: 'POST',
            }),
        }),
    }),
})

export const { useGetProductListQuery, useGetProductInfoQuery } = productApi
