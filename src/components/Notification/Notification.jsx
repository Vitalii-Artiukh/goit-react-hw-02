import clsx from 'clsx';
import { React } from 'react';
import styles from './Notification.module.css';

const Notification = () => {
  return (
    <>
      <p className={clsx(styles.notification)}>No feedback yet</p>
    </>
  );
};

export default Notification;
