import { createSlice, isAnyOf } from '@reduxjs/toolkit';

import * as handlers from '../services/function-thunk';
import { STATUS, appendThunk } from '../services/function-thunk';
import { initialState } from './initialState';
import { addContactThunk, deleteContactThunk, getContactsThunk } from './thunk';

const contactsSlice = createSlice({
  name: 'phonebook',
  initialState,
  reducers: {
    setFilter(state, action) {
      state.filter = action.payload.toLowerCase();
    },
  },

  extraReducers: builder => {
    const { PENDING, REJECTED, FULFILLED } = STATUS;

    builder
      .addCase(getContactsThunk.fulfilled, handlers.handleFulfilledGet)
      .addCase(addContactThunk.fulfilled, handlers.handleFulfilledAdd)
      .addCase(deleteContactThunk.fulfilled, handlers.handleFulfilledDel)
      .addMatcher(isAnyOf(...appendThunk(PENDING)), handlers.handlePending)
      .addMatcher(isAnyOf(...appendThunk(FULFILLED)), handlers.handleFulfilled)
      .addMatcher(isAnyOf(...appendThunk(REJECTED)), handlers.handleRejected);
  },
});

export const { setFilter } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
