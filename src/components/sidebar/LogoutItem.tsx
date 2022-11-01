import { Icon } from '../ui';
import userImage from '../../assets/images/user.png';

export const LogoutItem = () => {
  return (
    <section className="logout-item" aria-label="sidebar user logout">
      <div className="logout-avatar">
        <img src={userImage} alt="User avatar" />
      </div>
      <span className="logout_title">Robert Fox</span>
      <Icon name="logout" color="var(--black)" size="24" />
    </section>
  );
};
