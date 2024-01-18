import { createPortal } from 'react-dom';
import { X } from 'lucide-react';
import { useEffect } from 'react';
import { motion } from 'framer-motion';

import { modalAnimation, overlayAnimation } from 'services/animationConfig';
import EditContactForm from 'components/Forms/EditContactForm';

const modalRoot = document.getElementById('modal-root');

const ContactModal = ({ id, name, number, close }) => {
  const closeModal = ({ target, currentTarget, code }) => {
    if (target === currentTarget || code === 'Escape') {
      close();
    }
  };

  useEffect(() => {
    document.addEventListener('keydown', closeModal);

    return () => document.removeEventListener('keydown', closeModal);
  });

  return createPortal(
    <motion.div
      className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-80 flex items-center justify-center z-50"
      {...overlayAnimation}
      onClick={closeModal}
    >
      <motion.div className="relative" {...modalAnimation}>
        <button
          className="z-[1] absolute top-3 right-3 p-[2px] flex items-center justify-center rounded-full  text-white hover:bg-emerald-600 transition-colors duration-300"
          onClick={close}
        >
          <X />
        </button>
        <EditContactForm id={id} name={name} number={number} closeModal={close} />
      </motion.div>
    </motion.div>,
    modalRoot
  );
};

export default ContactModal;
