import { createSelector } from '@reduxjs/toolkit';

export const selectItems = state => state.phonebook.contacts.items;
export const seleсtFilter = state => state.phonebook.filter;
export const selectStatus = state => state.phonebook.contacts.status;
export const selectError = state => state.phonebook.contacts.error;

export const selectVisibleContacts = createSelector(
  [selectItems, seleсtFilter],

  (items, filter) => {
    return items.filter(({ name }) => name.toLowerCase().includes(filter));
  }
);
