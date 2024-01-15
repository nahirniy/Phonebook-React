import { configureStore } from '@reduxjs/toolkit';
import { filterReducer } from './filterSlice';
import { authApi } from 'services/authApi';
import { contactsApi } from 'services/contactsApi';
import { authReducer } from './authSlice';

export const store = configureStore({
  reducer: {
    filter: filterReducer,
    auth: authReducer,
    [authApi.reducerPath]: authApi.reducer,
    [contactsApi.reducerPath]: contactsApi.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(authApi.middleware).concat(contactsApi.middleware),
});
