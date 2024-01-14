import { configureStore } from '@reduxjs/toolkit';
import { contactsReducer } from './contactsSlice';
import { authApi } from 'services/authApi';
import { contactsApi } from 'services/contactsApi';
import { authReducer } from './authSlice';

export const store = configureStore({
  reducer: {
    phonebook: contactsReducer,
    auth: authReducer,
    [authApi.reducerPath]: authApi.reducer,
    [contactsApi.reducerPath]: contactsApi.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(authApi.middleware).concat(contactsApi.middleware),
});
