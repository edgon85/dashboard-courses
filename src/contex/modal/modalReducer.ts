import { ModalInitState } from '../../interfaces';

type ModalActions = { type: 'openModal'; payload: boolean };

export const modalReducer = (
  state: ModalInitState,
  action: ModalActions
): ModalInitState => {
  switch (action.type) {
    case 'openModal':
      return {
        isModalOpen: action.payload,
      };

    default:
      return state;
  }
};
