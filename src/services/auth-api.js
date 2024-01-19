import { createApi } from '@reduxjs/toolkit/query/react';
import { baseQuery } from './helpers';

export const authApi = createApi({
  reducerPath: 'authorization',
  baseQuery,
  endpoints: builder => ({
    register: builder.mutation({
      query: body => ({ url: '/users/signup', method: 'POST', body }),
    }),
    login: builder.mutation({
      query: body => ({ url: '/users/login', method: 'POST', body }),
    }),
    logout: builder.mutation({
      query: body => ({ url: '/users/logout', method: 'POST', body }),
    }),
    getUser: builder.query({
      query: () => '/users/current',
    }),
  }),
});

export const {
  useRegisterMutation,
  useLoginMutation,
  useLogoutMutation,
  useGetUserQuery,
} = authApi;
