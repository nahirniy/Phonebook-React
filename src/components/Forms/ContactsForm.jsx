import { Formik } from 'formik';
import { useEffect } from 'react';
import toast from 'react-hot-toast';

import Form from 'common/components/Form/Form';
import Input from 'common/components/Form/Input';
import Button from 'common/components/Button';
import { useAddContactMutation, useGetContactsQuery } from 'services/contactsApi';
import  Loader  from 'common/components/Loader';
import { isContactDublicate } from 'services/helpers';

const ContactsForm = () => {
  const [addContact, { isLoading, isError, isSuccess, error }] = useAddContactMutation();
  const { data: contacts } = useGetContactsQuery();

  useEffect(() => {
    if (!isSuccess) return;

    toast.success('Contact successfully added!');
  }, [isSuccess]);

  useEffect(() => {
    if (!isError) return;

    toast.error(error.data.message);
  }, [isError, error]);

  const handleSubmit = newContact => {
    const inContact = isContactDublicate(contacts, newContact);

    if (inContact) return;

    addContact(newContact);
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
