import { createContext } from 'react';
import { NotificationContextProps } from '../../interfaces';

export const NotificationContext = createContext<NotificationContextProps>(
  {} as NotificationContextProps
);
