import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { IProduct } from '../interface/product';

export const cateApi = createApi({
    reducerPath: 'cateApi',
    baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3000" }),
    tagTypes: ['Category'],
    endpoints: (builder) => ({
        getcategories: builder.query<IProduct[], void>({
            query: () => '/categories',
            providesTags: ['Category'],
        }),
        getProduct: builder.query<IProduct, void>({
            query: (id) => ({
                url: `/categories/` + id,
            }),
            providesTags: ['Category']
        }),
        addProduct: builder.mutation<IProduct, Omit<IProduct, "id">>({
            query: (product) => ({
                url: '/categories',
                method: 'POST',
                body: product,
            }),
            invalidatesTags: ['Category'],
        }),
        editProduct: builder.mutation<IProduct, IProduct>({
            query: (product) => ({
                url: `categories/${product.id}`,
                method: 'PUT',
                body: product,
            }),
            invalidatesTags: ['Category'],
        }),
        removeProduct: builder.mutation<IProduct, IProduct>({
            query: (id) => ({
                url: `categories/${id}`,
                method: 'DELETE',
            }),
            invalidatesTags: ['Category'],
        })
    })
});

export const {
    useGetcategoriesQuery,
    useGetProductQuery,
    useAddProductMutation,
    useEditProductMutation,
    useRemoveProductMutation
} = cateApi;