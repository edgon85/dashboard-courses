import { useNotificationAlert } from '../../hooks';

export const NotificationAlert = () => {
  const { showNotification, title, message } = useNotificationAlert();

  return (
    <div className={`notification  ${!showNotification ? 'exit' : ''}`}>
      <div className="notification-content">
        <h5 className="notication-title">{title}</h5>
        <p className="notification-message">{message}</p>
      </div>
    </div>
  );
};
