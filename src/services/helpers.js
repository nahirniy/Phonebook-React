import { Notify } from 'notiflix';

export function isContactDublicate(contacts, newContact) {
  const inContact = contacts.some(
    ({ name }) => name.toLowerCase() === newContact.name.toLowerCase()
  );

  if (inContact) Notify.failure(`${newContact.name} is already in contacts`);

  return inContact;
}

export const validatePhone = value => {
  const isValid = /^[+\d]{5,15}$/.test(value);

  if (!isValid && value) {
    return 'Invalid phone number. It should contain only digits and be between 5 and 15 characters.';
  } else if (!value) {
    return 'Required';
  }

  return undefined;
};

export const validateName = value => {
  const isValid = /^[a-zA-Z\s]{4,20}$/.test(value);

  if (!isValid && value) {
    return 'Invalid name. It should contain at least one letter and be between 4 and 15 characters.';
  } else if (!value) {
    return 'Required';
  }

  return undefined;
};
