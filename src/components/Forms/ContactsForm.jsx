import { Formik } from 'formik';

import Form from 'common/components/Form/Form';
import Input from 'common/components/Form/Input';
import Button from 'common/components/Button';
import { useAddContactMutation } from 'services/contactsApi';
import { Loader } from 'components/Loader/Loader';
import { useEffect } from 'react';
import toast from 'react-hot-toast';

const ContactsForm = () => {
  const [addContact, { isLoading, isError, isSuccess, error }] = useAddContactMutation();

  useEffect(() => {
    if (!isSuccess) return;

    toast.success('Contact successfully added!');
  }, [isSuccess]);

  useEffect(() => {
    if (!isError) return;

    toast.error(error.data.message);
  }, [isError, error]);

  const handleSubmit = value => {
    addContact(value);
  };

  return (
    <Formik initialValues={{ name: '', number: '' }} onSubmit={handleSubmit}>
      <Form title="Phonebook">
        <Input type="text" name="name" label="Contact Name" />
        <Input type="tel" name="number" label="Contact Number" />
        <Button type="submit">{isLoading ? <Loader /> : 'Add New Contact'}</Button>
      </Form>
    </Formik>
  );
};

export default ContactsForm;
