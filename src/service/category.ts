import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { ICate } from '../interface/category';

export const cateApi = createApi({
    reducerPath: 'cateApi',
    baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3000" }),
    tagTypes: ['Category'],
    endpoints: (builder) => ({
        getCategories: builder.query<ICate[], void>({
            query: () => '/categories',
            providesTags: ['Category'],
        }),
        getCategory: builder.query<ICate, void>({
            query: (id) => ({
                url: `/categories/` + id,
            }),
            providesTags: ['Category']
        })
    })
});

export const {
    useGetCategoriesQuery,
    useGetCategoryQuery,
} = cateApi;