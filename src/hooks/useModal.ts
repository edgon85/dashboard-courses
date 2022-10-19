import { useContext } from 'react';
import { ModalContext } from '../contex';

export const useModal = () => {
  const { modalState, toogleModal } = useContext(ModalContext);

  return {
    ...modalState,
    toogleModal,
  };
};
