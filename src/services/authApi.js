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
  tagTypes: ['Token'],
  endpoints: builder => ({
    register: builder.mutation({
      query: body => ({ url: '/users/signup', method: 'POST', body }),
      providesTags: ['Token'],
    }),
    login: builder.mutation({
      query: body => ({ url: '/users/login', method: 'POST', body }),
      providesTags: ['Token'],
    }),
  }),
});

export const { useRegisterMutation, useLoginMutation } = authApi;
