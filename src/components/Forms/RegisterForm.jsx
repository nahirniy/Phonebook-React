import { Formik } from 'formik';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import toast from 'react-hot-toast';

import Form from 'common/components/Form/Form';
import Input from 'common/components/Form/Input';
import RegisterLoginLinks from 'common/components/Form/RegisterLoginLinks';
import Button from 'common/components/Button';
import { useRegisterMutation } from 'services/authApi';
import { Loader } from 'components/Loader/Loader';

// import { fetchError, fetchNewUser } from 'services/fetch-user';

import { handleError } from 'services/helpers';

// fweffwfwfdewfewfwe@gmail.com
// toast.success('User is successfully registered');

const RegisterForm = () => {
  const [register, { isLoading, isError, isSuccess, error }] = useRegisterMutation();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isSuccess) return;

    navigate('/contacts');
    toast.success('User is successfully registered! Welcome to phonebook');
  }, [isSuccess, navigate]);

  useEffect(() => {
    if (!isError) return;

    handleError(error);
  }, [isError, error]);

  const handleSubmit = user => {
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
