import toast from 'react-hot-toast';

export const fetchNewUser = data => {
  if (data.error) throw data.error;

  toast.success('User is successfully registered');
};

export const fetchError = error => {
  const errorEmail = Boolean(error.data.keyValue?.email);
  const errorPassword = Boolean(error.data.errors?.password);

  if (errorEmail) return toast.error('This email is already registered');

  if (errorPassword) return toast.error('Password must contain more than 7 characters');
};
