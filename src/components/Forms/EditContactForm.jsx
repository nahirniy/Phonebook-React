import { Formik } from 'formik';
import { useEffect } from 'react';
import toast from 'react-hot-toast';

import Button from 'common/components/Buttons/Button';
import Loader from 'common/components/Feedbacks/Loader';
import Form from 'common/components/Form/Form';
import Input from 'common/components/Form/Input';
import { useUpdateContactMutation } from 'services/contactsApi';
import {  validateContact } from 'services/validataion';

const EditContactForm = ({ id, name, number, closeModal }) => {
  const [updateContact, { error, isLoading, isError, isSuccess }] =
    useUpdateContactMutation();

  useEffect(() => {
    if (!isSuccess) return;

    console.log(isSuccess);

    toast.success('Contact updated successfully');

    closeModal();
  }, [isSuccess, closeModal]);

  useEffect(() => {
    if (!isError) return;

    toast.error(`We could not update the contact. Try again! ${error.data.message}`);
  }, [isError, error]);

  const handleSubmit = editedContact => {
    const isValidate = validateContact(editedContact);

    if (!isValidate) return;

    updateContact({ editedContact, id });
  };

  return (
    <Formik
      initialValues={{ name: name || '', number: number || '' }}
      onSubmit={handleSubmit}
    >
      <Form title="Edit Contact">
        <Input type="text" name="name" label="New Name" />
        <Input type="tel" name="number" label="New Number" />
        <Button type="submit">{isLoading ? <Loader /> : 'Confirm Edit'}</Button>
      </Form>
    </Formik>
  );
};

export default EditContactForm;
