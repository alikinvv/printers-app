import { baseApi } from 'services/baseApi'
import {
    IProduct,
    IProductImportStocks,
    IProductImportStocksParams,
    IProductInfo,
    IProductList,
} from '.'
import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { getProductUpdate } from 'utils'

const apiWithTags = baseApi.enhanceEndpoints({
    addTagTypes: ['Products'],
})

export const productApi = apiWithTags.injectEndpoints({
    endpoints: ({ query, mutation }) => ({
        getProductList: query<IProductList, void>({
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

export const {
    useGetProductListQuery,
    useGetProductInfoQuery,
    useLazyGetProductListQuery,
} = productApi

interface IState {
    list: IProduct[]
}

const initialState: IState = {
    list: [],
}

export const product = createSlice({
    name: 'product',
    initialState,
    reducers: {
        setProductList: (state, { payload }: PayloadAction<IProductList>) => {
            state.list = payload.result.items.map((item) => {
                return {
                    offer_id: item.offer_id,
                    product_id: item.product_id,
                    update: getProductUpdate(item.offer_id),
                }
            })
        },
    },
})

export const { setProductList } = product.actions

export default product.reducer
