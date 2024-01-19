import { Formik } from 'formik';
import { useEffect } from 'react';
import toast from 'react-hot-toast';
import { useDispatch } from 'react-redux';

import Form from 'common/components/Form/Form';
import Input from 'common/components/Form/Input';
import RegisterLoginLinks from 'common/components/Form/RegisterLoginLinks';
import Button from 'common/components/Buttons/Button';
import Loader from 'common/components/Feedbacks/Loader';

import { useRegisterMutation } from 'services/auth-api';
import { handleError } from 'services/helpers';
import { setToken, setUser } from '../../redux/authSlice';
import { validateNewUser } from 'services/validataion';

const RegisterForm = () => {
  const [register, { data, isLoading, isError, isSuccess, error }] =
    useRegisterMutation();
  const dispatch = useDispatch();

  useEffect(() => {
    if (!isSuccess) return;

    dispatch(setToken(data.token));
    dispatch(setUser(data.user));

    toast.success('User is successfully registered! Welcome to phonebook');
  }, [data, isSuccess, dispatch]);

  useEffect(() => {
    if (!isError) return;

    handleError(error);
  }, [isError, error]);

  const handleSubmit = user => {
    const isValidate = validateNewUser(user);

    if (!isValidate) return;

    register(user);
  };

  return (
    <Formik initialValues={{ name: '', email: '', password: '' }} onSubmit={handleSubmit}>
      <Form title="Register">
        <Input type="text" name="name" label="Your Name" />
        <Input type="email" name="email" label="Your Email" />
        <Input type="password" name="password" label="Your Password" />
        <Button type="submit">{isLoading ? <Loader /> : 'Register'}</Button>
        <RegisterLoginLinks title="Register" />
      </Form>
    </Formik>
  );
};

export default RegisterForm;
