import { configureStore } from '@reduxjs/toolkit';
import { filterReducer } from './filterSlice';
import { authApi } from 'services/authApi';
import { contactsApi } from 'services/contactsApi';
import { authReducer } from './authSlice';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'phonebook',
  storage,
};

const persistedReducer = persistReducer(persistConfig, authReducer);

export const store = configureStore({
  reducer: {
    filter: filterReducer,
    auth: persistedReducer,
    [authApi.reducerPath]: authApi.reducer,
    [contactsApi.reducerPath]: contactsApi.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ['persist/PERSIST'],
      },
    })
      .concat(authApi.middleware)
      .concat(contactsApi.middleware),
});

export const persistor = persistStore(store);
