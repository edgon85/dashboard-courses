import { NotificationState } from '../../interfaces';

type NotificationActions =
  | {
      type: 'showNotification';
      payload: { title: string; message: string };
    }
  | {
      type: 'hideNotification';
    };

export const notificationReducer = (
  state: NotificationState,
  action: NotificationActions
): NotificationState => {
  switch (action.type) {
    case 'showNotification':
      return {
        ...state,
        showNotification: true,
        title: action.payload.title,
        message: action.payload.message,
      };
    case 'hideNotification':
      return {
        ...state,
        showNotification: false,
        title: '',
        message: '',
      };

    default:
      return state;
  }
};
