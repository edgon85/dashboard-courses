import { useReducer } from 'react';
import { ModalContextProps, ModalInitState } from '../../interfaces';
import { ModalContext } from './ModalContext';
import { modalReducer } from './modalReducer';

const INITIAL_STATE: ModalInitState = {
  isModalOpen: false,
};

type props = {
  children: JSX.Element | JSX.Element[];
};

export const ModalProvider = ({ children }: props) => {
  const [modalState, dispatch] = useReducer(modalReducer, INITIAL_STATE);

  const toogleModal = () => {
    dispatch({ type: 'openModal', payload: !modalState.isModalOpen });
  };

  return (
    <ModalContext.Provider
      value={{
        ...modalState,
        modalState,
        toogleModal,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};
