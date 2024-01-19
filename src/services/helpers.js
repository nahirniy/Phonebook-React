import { fetchBaseQuery } from '@reduxjs/toolkit/query';
import toast from 'react-hot-toast';

export const handleError = error => {
  const errorEmail = Boolean(error.data.keyValue?.email);
  const errorPassword = Boolean(error.data.errors?.password);

  if (errorEmail) return toast.error('This email is already registered');

  if (errorPassword) return toast.error('Password must contain more than 7 characters');

  toast.error('Incorrect password or email');
};

export function isContactDublicate(contacts, newContact) {
  const inContact = contacts.some(
    ({ name }) => name.toLowerCase() === newContact.name.toLowerCase()
  );

  if (inContact) toast.error(`${newContact.name} is already in contacts`);

  return inContact;
}

export function getVisibleConatcts(contacts, filter) {
  const inContact = contacts?.filter(({ name }) => name.toLowerCase().includes(filter));

  return inContact;
}

export const baseQuery = fetchBaseQuery({
  baseUrl: 'https://connections-api.herokuapp.com',
  prepareHeaders: (headers, { getState }) => {
    const token = getState().userData.auth.token;

    if (token) headers.set('authorization', `Bearer ${token}`);

    return headers;
  },
});
