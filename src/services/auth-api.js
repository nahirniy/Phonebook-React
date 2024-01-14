import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const authApi = createApi({
  reducerPath: 'authorization',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://connections-api.herokuapp.com' }),
  tagTypes: ['Token'],
  endpoints: builder => ({
    addUser: builder.mutation({
      query: body => ({ url: '/users/signup', method: 'POST', body }),
      providesTags: ['Token'],
    }),
  }),
});

export const { useAddUserMutation } = authApi;
