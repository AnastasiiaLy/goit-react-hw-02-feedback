import css from './Notification.module.css';
export const Notification = ({ message }) => {
  return (
    <div>
      <p className={css.notification}>{message}</p>
    </div>
  );
};
