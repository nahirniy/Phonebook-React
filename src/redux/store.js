import { configureStore } from '@reduxjs/toolkit';
import { contactsReducer } from './contactsSlice';

export const store = configureStore({
  reducer: {
    phonebook: contactsReducer,
  },
});
