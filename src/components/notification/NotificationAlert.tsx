import { useEffect, useState } from 'react';
import { useNotificationAlert } from '../../hooks';

export const NotificationAlert = () => {
  const { showNotification, title, message } = useNotificationAlert();
  const [hidden, setHidden] = useState('');

  useEffect(() => {
    if (showNotification) {
      setHidden(' hidden');
    }
    const timer = setTimeout(() => {
      setHidden('');
    }, 3500);
    return () => clearTimeout(timer);
  }, [showNotification]);

  return (
    <div className={`notification${!showNotification ? '' : ' show'}${hidden}`}>
      <div className="notification-content">
        <h5 className="notication-title">{title}</h5>
        <p className="notification-message">{message}</p>
      </div>
    </div>
  );
};
