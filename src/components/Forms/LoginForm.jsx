import { Formik } from 'formik';
import { useEffect } from 'react';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

import Form from 'common/components/Form/Form';
import Input from 'common/components/Form/Input';
import RegisterLoginLinks from 'common/components/Form/RegisterLoginLinks';
import Button from 'common/components/Button';
import { Loader } from 'components/Loader/Loader';
import { useLoginMutation } from 'services/authApi';
import { setToken } from '../../redux/authSlice';
import { useDispatch } from 'react-redux';

const LoginForm = () => {
  const [login, { data, isLoading, isError, isSuccess }] = useLoginMutation();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isSuccess) return;

    dispatch(setToken(data.token));

    // navigate('/contacts');
    toast.success('Welcome to phonebook!');
  }, [data, isSuccess, navigate, dispatch]);

  useEffect(() => {
    if (!isError) return;

    toast.error('Incorrect password or email');
  }, [isError]);

  const handleSubmit = user => {
    login(user);
  };

  return (
    <Formik initialValues={{ email: '', password: '' }} onSubmit={handleSubmit}>
      <Form title="Login">
        <Input type="email" name="email" label="Your Email" />
        <Input type="password" name="password" label="Your Password" />
        <Button type="submit">{isLoading ? <Loader /> : 'Register'}</Button>
        <RegisterLoginLinks title="Login" />
      </Form>
    </Formik>
  );
};

export default LoginForm;
