import { useEffect } from 'react';
import toast from 'react-hot-toast';

import Loader from 'common/components/Feedbacks/Loader';
import { useDeleteContactMutation } from 'services/contacts-api';
import { AnimatePresence } from 'framer-motion';
import MiniButton from 'common/components/Buttons/MiniButton';
import Modal from 'common/components/Modal/Modal';
import EditContactForm from 'components/Forms/EditContactForm';
import useToggle from 'hooks/useToggle';

const ContactItem = ({ id, name, number }) => {
  const [deleteContact, { isLoading, isError, isSuccess }] = useDeleteContactMutation();
  const { modal, toggleModal } = useToggle(false);

  useEffect(() => {
    if (!isSuccess) return;

    toast.success('Сontact deleted successfully');
  }, [isSuccess]);

  useEffect(() => {
    if (!isError) return;

    toast.error("We couldn't delete the contact. Try again!");
  }, [isError]);

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
          <MiniButton type="button" handleClick={toggleModal}>
            Edit
          </MiniButton>
          <MiniButton type="button" handleClick={() => deleteContact(id)}>
            {isLoading ? <Loader size="40" /> : 'Delete'}
          </MiniButton>
        </div>
      </li>
      <AnimatePresence mode="wait">
        {modal && (
          <Modal toggleModal={toggleModal}>
            <EditContactForm data={{ id, name, number }} toggleModal={toggleModal} />
          </Modal>
        )}
      </AnimatePresence>
    </>
  );
};

export default ContactItem;
