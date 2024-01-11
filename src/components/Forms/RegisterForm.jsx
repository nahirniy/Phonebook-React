import { Formik } from 'formik';

import Form from 'common/components/Form/Form';
import Input from 'common/components/Form/Input';
import FormButton from 'common/components/Form/FormButton';
import RegisterLoginLinks from 'common/components/Form/RegisterLoginLinks';

const RegisterForm = () => {
  const handleSubmit = value => {
    console.log(value);
  };

  return (
    <Formik initialValues={{ text: '', email: '', password: '' }} onSubmit={handleSubmit}>
      <Form title="Register">
        <Input type="text" name="Name" />
        <Input type="email" name="Email" />
        <Input type="password" name="Password" />
        <FormButton name="Register" />
        <RegisterLoginLinks title="Register" />
      </Form>
    </Formik>
  );
};

export default RegisterForm;
