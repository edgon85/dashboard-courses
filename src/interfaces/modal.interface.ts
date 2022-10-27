export interface ModalInitState {
  isModalOpen: boolean;
  typeDelete: string;
}

export type ModalContextProps = {
  modalState: ModalInitState;
  toogleModal: (typeDelete: string) => void;
};

/* this is for notification */

export interface Notification {
  showNotification: boolean;
  title: string;
  message: string;
}

export interface NotificationState {
  showNotification: boolean;
  title: string;
  message: string;
}

export type NotificationContextProps = {
  notificationState: NotificationState;
  setNotification: (notificationTitle: string, msg: string) => void;
  hideNotification: () => void;
};
