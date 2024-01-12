import { Formik } from 'formik';

import Form from 'common/components/Form/Form';
import Input from 'common/components/Form/Input';
import FormButton from 'common/components/Form/FormButton';
import RegisterLoginLinks from 'common/components/Form/RegisterLoginLinks';

const LoginForm = () => {
  const handleSubmit = value => {
    console.log(value);
  };

  return (
    <Formik initialValues={{ email: '', password: '' }} onSubmit={handleSubmit}>
      <Form title="Login">
        <Input type="email" name="Email" />
        <Input type="password" name="Password" />
        <FormButton name="Login" />
        <RegisterLoginLinks title="Login" />
      </Form>
    </Formik>
  );
};

export default LoginForm;
