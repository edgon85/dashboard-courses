import { useContext } from 'react';
import { NotificationContext } from '../contex';

export const useNotificationAlert = () => {
  const { notificationState, setNotification, hideNotification } =
    useContext(NotificationContext);
  return {
    ...notificationState,

    setNotification,
    hideNotification,
  };
};
