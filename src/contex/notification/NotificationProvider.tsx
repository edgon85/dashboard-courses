import { useReducer } from 'react';
import { NotificationState } from '../../interfaces';
import { NotificationContext, notificationReducer } from './';

type props = {
  children: JSX.Element | JSX.Element[];
};

const INITIAL_STATE: NotificationState = {
  showNotification: false,
  title: '',
  message: '',
};

export const NotificationProvider = ({ children }: props) => {
  const [notificationState, dispatch] = useReducer(
    notificationReducer,
    INITIAL_STATE
  );

  const setNotification = (notificationTitle: string, msg: string) => {
    dispatch({
      type: 'showNotification',
      payload: { title: notificationTitle, message: msg },
    });
  };

  const hideNotification = () => {
    setTimeout(() => {
      dispatch({ type: 'hideNotification' });
    }, 3000);
  };

  return (
    <NotificationContext.Provider
      value={{
        notificationState,

        setNotification,
        hideNotification,
      }}
    >
      {children}
    </NotificationContext.Provider>
  );
};
