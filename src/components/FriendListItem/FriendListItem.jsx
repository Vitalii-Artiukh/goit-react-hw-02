import styles from './friendListItem.module.css';
import clsx from 'clsx';

const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <div>
      <img src={avatar} alt={'Avatar ' + name} width="80" />
      <p>{name}</p>
      {isOnline ? (
        <p className={clsx(styles.online)}>Online</p>
      ) : (
        <p className={clsx(styles.ofline)}>Ofline</p>
      )}
    </div>
  );
};

export default FriendListItem;
