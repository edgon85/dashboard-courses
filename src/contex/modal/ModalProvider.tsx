import { useReducer } from 'react';
import { ModalContextProps, ModalInitState } from '../../interfaces';
import { ModalContext } from './ModalContext';
import { modalReducer } from './modalReducer';

const INITIAL_STATE: ModalInitState = {
  isModalOpen: false,
  typeDelete: '',
};

type props = {
  children: JSX.Element | JSX.Element[];
};

export const ModalProvider = ({ children }: props) => {
  const [modalState, dispatch] = useReducer(modalReducer, INITIAL_STATE);

  const toogleModal = (typeDelete: string) => {
    dispatch({
      type: 'openModal',
      payload: { isModalOpen: !modalState.isModalOpen, typeDelete: typeDelete },
    });
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
