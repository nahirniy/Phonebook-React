import { createPortal } from 'react-dom';
import { X } from 'lucide-react';
import { useEffect } from 'react';
import { motion } from 'framer-motion';

import { modalAnimation, overlayAnimation } from 'services/animation-config';

const modalRoot = document.getElementById('modal-root');

const Modal = ({ children, toggleModal }) => {
  const close = ({ target, currentTarget, code }) => {
    if (target === currentTarget || code === 'Escape') {
      toggleModal();
    }
  };

  useEffect(() => {
    document.addEventListener('keydown', close);

    return () => document.removeEventListener('keydown', close);
  });

  return createPortal(
    <motion.div
      className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-80 flex items-center justify-center z-50"
      {...overlayAnimation}
      onClick={close}
    >
      <motion.div className="relative" {...modalAnimation}>
        <button
          className="z-[1] absolute top-3 right-3 p-[2px] flex items-center justify-center rounded-full  text-white hover:bg-emerald-600 transition-colors duration-300"
          onClick={toggleModal}
        >
          <X />
        </button>
        {children}
      </motion.div>
    </motion.div>,
    modalRoot
  );
};

export default Modal;
