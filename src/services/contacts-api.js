import { createApi } from '@reduxjs/toolkit/query/react';
import { baseQuery } from './helpers';

export const contactsApi = createApi({
  reducerPath: 'contacts',
  baseQuery,
  tagTypes: ['Contacts'],
  refetchOnMountOrArgChange: true,
  endpoints: builder => ({
    getContacts: builder.query({
      query: () => '/contacts',
      providesTags: ['Contacts'],
    }),
    addContact: builder.mutation({
      query: body => ({ url: '/contacts', method: 'POST', body }),
      invalidatesTags: ['Contacts'],
    }),
    deleteContact: builder.mutation({
      query: id => ({ url: `/contacts/${id}`, method: 'DELETE' }),
      invalidatesTags: ['Contacts'],
    }),
    updateContact: builder.mutation({
      query: ({ editedContact, id }) => ({
        url: `/contacts/${id}`,
        method: 'PATCH',
        body: editedContact,
      }),
      invalidatesTags: ['Contacts'],
    }),
  }),
});

export const {
  useGetContactsQuery,
  useAddContactMutation,
  useDeleteContactMutation,
  useUpdateContactMutation,
} = contactsApi;
