import toast from 'react-hot-toast';

export const validateContact = contact => {
  const isValidName = /^[a-zA-Z\s]{4,20}$/.test(contact.name);
  const isValidNumber = /^[+\d]{5,15}$/.test(contact.number);

  if (!isValidName && contact.number) {
    toast.error(
      'Invalid name. It should contain at least one letter and be between 4 and 15 characters.'
    );

    return false;
  }

  if (!isValidNumber && contact.name) {
    toast.error(
      'Invalid phone number. It should contain only digits and be between 5 and 15 characters.'
    );

    return false;
  }

  return true;
};

export const validateUser = user => {
  const isValidPassword = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,20}$/.test(user.password);
  const isValidEmail = /^[^\s@]{2,20}@[^\s@]{2,20}\.[^\s@]{2,20}$/.test(user.email);

  if (!isValidEmail && user.email) {
    toast.error(
      'Invalid email address. Please enter a valid email. It should be between 2 and 20 symbols (before "@")'
    );

    return false;
  }

  if (!isValidPassword && user.password) {
    toast.error(
      'Invalid password. It should contain at least one letter, one number, and be between 8 and 20 characters.'
    );

    return false;
  }

  return true;
};

export const validateNewUser = newUser => {
  const isValidateNamePassword = validateUser(newUser);
  const isValidName = /^[a-zA-Z\s]{4,20}$/.test(newUser.name);

  if (!isValidateNamePassword) return;

  if (!isValidName && newUser.name) {
    toast.error(
      'Invalid name. It should contain at least one letter and be between 4 and 15 characters.'
    );

    return false;
  }

  return true;
};
