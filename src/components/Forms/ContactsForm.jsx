import { Formik } from 'formik';

import Form from 'common/components/Form/Form';
import Input from 'common/components/Form/Input';
import Button from 'common/components/Button';

const ContactsForm = () => {
  const handleSubmit = value => {
    console.log(value);
  };

  return (
    <Formik initialValues={{ name: '', number: '' }} onSubmit={handleSubmit}>
      <Form title="Phonebook">
        <Input type="text" name="name" label="Contact Name" />
        <Input type="tel" name="number" label="Contact Number" />
        <Button type="submit">Add New Contact</Button>
      </Form>
    </Formik>
  );
};

export default ContactsForm;
