import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { IAuth } from '../interface/auth'

export const authApi = createApi({
    reducerPath: 'authApi',
    baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3000" }),
    tagTypes: ['Auth'],
    endpoints: (builder) => ({
        signUp: builder.mutation<IAuth, Omit<IAuth, "id">>({
            query: (user) => ({
                url: '/signup',
                method: 'POST',
                body: user
            }),
            invalidatesTags: ['Auth']
        }),
        signIn: builder.mutation({
            query: (user) => ({
                url: '/signin',
                method: 'POST',
                body: user
            }),
            invalidatesTags: ['Auth']
        }),
    })

});
export const { useSignUpMutation, useSignInMutation } = authApi