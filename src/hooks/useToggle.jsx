import { useState } from 'react';

const useToggle = (initialState = false) => {
  const [modal, setModal] = useState(initialState);
  const toggleModal = () => setModal(isOpen => !isOpen);

  return { modal, toggleModal };
};

export default useToggle;
