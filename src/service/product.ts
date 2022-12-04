import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { IProduct } from '../interface/product';

export const productApi = createApi({
    reducerPath: 'productApi',
    baseQuery: fetchBaseQuery({
        baseUrl: "http://localhost:3000",
        prepareHeaders(headers, api) {
            const token = localStorage.getItem('token')
            if (token) {
                headers.set('authorization', token)
            }
            return headers
        }
    }),
    tagTypes: ['Product'],
    endpoints: (builder) => ({
        getProducts: builder.query<IProduct[], void>({
            query: () => '/products',
            providesTags: ['Product'],
        }),
        getProduct: builder.query<IProduct, void>({
            query: (id) => ({
                url: `/products/` + id,
            }),
            providesTags: ['Product']
        }),
        searchProd: builder.query<IProduct, void>({
            query: (id) => ({
                url: `/products/` + id,
            }),
            providesTags: ['Product']
        }),
        addProduct: builder.mutation<IProduct, Omit<IProduct, "id">>({
            query: (product) => ({
                url: '/products',
                method: 'POST',
                body: product,
            }),
            invalidatesTags: ['Product'],
        }),
        editProduct: builder.mutation<IProduct, IProduct>({
            query: (product) => ({
                url: `products/${product.id}`,
                method: 'PUT',
                body: product,
            }),
            invalidatesTags: ['Product'],
        }),
        removeProduct: builder.mutation<IProduct, IProduct>({
            query: (id) => ({
                url: `products/${id}`,
                method: 'DELETE',
            }),
            invalidatesTags: ['Product'],
        })
    })
});

export const {
    useGetProductsQuery,
    useGetProductQuery,
    useAddProductMutation,
    useEditProductMutation,
    useRemoveProductMutation,
    useSearchProdQuery,
} = productApi;