import { Formik } from 'formik';

import Form from 'common/components/Form/Form';
import Input from 'common/components/Form/Input';
import RegisterLoginLinks from 'common/components/Form/RegisterLoginLinks';
import Button from 'common/components/Button';
import { useAddUserMutation } from 'services/auth-api';
import { Loader } from 'components/Loader/Loader';

import { fetchError, fetchNewUser } from 'services/fetch-user';

// fweffwfwfdewfewfwe@gmail.com
// toast.success('User is successfully registered');

const RegisterForm = () => {
  const [addUser, { isLoading }] = useAddUserMutation();

  const handleSubmit = async user => {
    addUser(user)
      .then(data => fetchNewUser(data))
      .catch(error => fetchError(error));
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
