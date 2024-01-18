import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';

import Loader from 'common/components/Feedbacks/Loader';
import { useDeleteContactMutation } from 'services/contactsApi';
import ContactModal from 'components/ContactModal/ContactModal';
import { AnimatePresence } from 'framer-motion';
import MiniButton from 'common/components/Buttons/MiniButton';

const ContactItem = ({ id, name, number }) => {
  const [modal, setModal] = useState(false);
  const [deleteContact, { isLoading, isError, isSuccess }] = useDeleteContactMutation();

  useEffect(() => {
    if (!isSuccess) return;

    toast.success('Сontact deleted successfully');
  }, [isSuccess]);

  useEffect(() => {
    if (!isError) return;

    toast.error("We couldn't delete the contact. Try again!");
  }, [isError]);

  const openModal = () => setModal(true);

  const closeModal = () => setModal(false);

  return (
    <>
      <li className="flex gap-1 md:gap-9 justify-between items-center border rounded-lg p-2">
        <div className="flex flex-col gap-1">
          <p>
            <b>Name:</b> {name}
          </p>
          <p>
            <b>Number:</b> {number}
          </p>
        </div>
        <div className="flex flex-col gap-2">
          <MiniButton type="button" handleClick={openModal}>
            Edit
          </MiniButton>
          <MiniButton type="button" handleClick={() => deleteContact(id)}>
            {isLoading ? <Loader size="40" /> : 'Delete'}
          </MiniButton>
        </div>
      </li>
      <AnimatePresence mode="wait">
        {modal && <ContactModal id={id} name={name} number={number} close={closeModal} />}
      </AnimatePresence>
    </>
  );
};

export default ContactItem;
