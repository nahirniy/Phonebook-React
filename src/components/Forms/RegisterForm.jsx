import { Formik } from 'formik';

import Form from 'common/components/Form/Form';
import Input from 'common/components/Form/Input';
import RegisterLoginLinks from 'common/components/Form/RegisterLoginLinks';
import Button from 'common/components/Button';

const RegisterForm = () => {
  const handleSubmit = value => {
    console.log(value);
  };

  return (
    <Formik initialValues={{ name: '', email: '', password: '' }} onSubmit={handleSubmit}>
      <Form title="Register">
        <Input type="text" name="Name" />
        <Input type="email" name="Email" />
        <Input type="password" name="Password" />
        <Button type="submit">Register</Button>
        <RegisterLoginLinks title="Register" />
      </Form>
    </Formik>
  );
};

export default RegisterForm;
