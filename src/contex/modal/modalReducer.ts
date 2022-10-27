import { ModalInitState } from '../../interfaces';

type ModalActions =
  | { type: 'openModal'; payload: { isModalOpen: boolean; typeDelete: string } }
  | { type: 'typeDelete'; payload: string };

export const modalReducer = (
  state: ModalInitState,
  action: ModalActions
): ModalInitState => {
  switch (action.type) {
    case 'openModal':
      return {
        ...state,
        isModalOpen: action.payload.isModalOpen,
        typeDelete: action.payload.typeDelete,
      };

    default:
      return state;
  }
};
