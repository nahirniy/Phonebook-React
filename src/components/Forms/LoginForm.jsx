import { Formik } from 'formik';

import Form from 'common/components/Form/Form';
import Input from 'common/components/Form/Input';
import RegisterLoginLinks from 'common/components/Form/RegisterLoginLinks';
import Button from 'common/components/Button';

const LoginForm = () => {
  const handleSubmit = value => {
    console.log(value);
  };

  return (
    <Formik initialValues={{ email: '', password: '' }} onSubmit={handleSubmit}>
      <Form title="Login">
        <Input type="email" name="Email" />
        <Input type="password" name="Password" />
        <Button type="submit">Login</Button>
        <RegisterLoginLinks title="Login" />
      </Form>
    </Formik>
  );
};

export default LoginForm;
