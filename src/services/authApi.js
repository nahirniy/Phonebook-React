import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const baseQuery = fetchBaseQuery({
  baseUrl: 'https://connections-api.herokuapp.com',
  prepareHeaders: (headers, { getState }) => {
    const token = getState().auth.token;

    if (token) headers.set('authorization', `Bearer ${token}`);

    return headers;
  },
});

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
