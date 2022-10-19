export interface ModalInitState {
  isModalOpen: boolean;
}

export type ModalContextProps = {
  modalState: ModalInitState;
  toogleModal: () => void;
};
