import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { ISize } from '../interface/size';

export const sizeApi = createApi({
    reducerPath: 'sizeApi',
    baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3000" }),
    tagTypes: ['Size'],
    endpoints: (builder) => ({
        getSizes: builder.query<ISize[], void>({
            query: () => '/size',
            providesTags: ['Size'],
        }),
        getSize: builder.query<ISize, void>({
            query: (id) => ({
                url: `/size/` + id,
            }),
            providesTags: ['Size']
        })
    })
});

export const {
    useGetSizesQuery,
    useGetSizeQuery,
} = sizeApi;