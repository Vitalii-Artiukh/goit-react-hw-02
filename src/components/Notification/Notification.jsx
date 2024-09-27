import clsx from 'clsx';
import { React } from 'react';
import styles from './Notification.module.css';

const Notification = ({ totalFeedback }) => {
  return (
    <>
      {totalFeedback === 0 ? (
        <p className={clsx(styles.notification)}>No feedback yet</p>
      ) : null}
    </>
  );
};

export default Notification;
