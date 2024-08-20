import { useState } from 'react';

const useModalState = () => {
  const [currentModal, setCurrentModal] = useState(null);

  const showModal = (modalName) => {
    setCurrentModal(modalName);
  };

  const hideModal = () => {
    setCurrentModal(null);
  };

  return {
    currentModal,
    showModal,
    hideModal,
  };
};

export default useModalState;
