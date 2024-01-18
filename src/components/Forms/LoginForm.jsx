import { Formik } from 'formik';
import { useEffect } from 'react';
import toast from 'react-hot-toast';
import { useDispatch } from 'react-redux';

import Form from 'common/components/Form/Form';
import Input from 'common/components/Form/Input';
import RegisterLoginLinks from 'common/components/Form/RegisterLoginLinks';
import Button from 'common/components/Buttons/Button';
import Loader from 'common/components/Feedbacks/Loader';

import { useLoginMutation } from 'services/authApi';
import { setToken, setUser } from '../../redux/authSlice';
import { validateUser } from 'services/validataion';

const LoginForm = () => {
  const [login, { data, isLoading, isError, isSuccess }] = useLoginMutation();
  const dispatch = useDispatch();

  useEffect(() => {
    if (!isSuccess) return;

    dispatch(setToken(data.token));
    dispatch(setUser(data.user));

    toast.success('Welcome to phonebook!');
  }, [data, isSuccess, dispatch]);

  useEffect(() => {
    if (!isError) return;

    toast.error('Incorrect password or email');
  }, [isError]);

  const handleSubmit = user => {
    const isValidate = validateUser(user);

    if (!isValidate) return;

    login(user);
  };

  return (
    <Formik initialValues={{ email: '', password: '' }} onSubmit={handleSubmit}>
      <Form title="Login">
        <Input type="email" name="email" label="Your Email" />
        <Input type="password" name="password" label="Your Password" />
        <Button type="submit">{isLoading ? <Loader /> : 'Login'}</Button>
        <RegisterLoginLinks title="Login" />
      </Form>
    </Formik>
  );
};

export default LoginForm;
