import { useEffect } from 'react';
import toast from 'react-hot-toast';

import Loader from 'common/components/Loader';
import { useDeleteContactMutation, useGetContactsQuery } from 'services/contactsApi';

const ContactItem = ({ id, name, number }) => {
  const [deleteContact, { isLoading, isError, isSuccess }] = useDeleteContactMutation();
  const { isLoading: loadingGet } = useGetContactsQuery();

  const loading = isLoading || loadingGet;

  useEffect(() => {
    if (!isSuccess) return;

    toast.success('Сontact deleted successfully');
  }, [isSuccess]);

  useEffect(() => {
    if (!isError) return;

    toast.error("We couldn't delete the contact. Try again!");
  }, [isError]);

  return (
    <li className="flex md:gap-9 justify-between items-center border rounded-lg p-2">
      <p className="flex flex-col gap-1">
        <span className="block">
          <b>Name:</b> {name}
        </span>
        <span className="block">
          <b>Number:</b> {number}
        </span>
      </p>
      <button
        className="w-[80px] flex items-center justify-center h-[35px]  text-[16px]  rounded-full bg-white text-emerald-800 hover:bg-emerald-600 hover:text-white transition-colors duration-300"
        type="button"
        disabled={loading}
        onClick={() => deleteContact(id)}
      >
        {loading ? <Loader size="40" /> : 'Delete'}
      </button>
    </li>
  );
};

export default ContactItem;
