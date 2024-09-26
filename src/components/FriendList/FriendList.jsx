import React from 'react';
import clsx from 'clsx';
import styles from './FriendList.module.css';
import FriendListItem from '../FriendListItem/FriendListItem';

const FriendList = ({ friends }) => {
  return (
    <div>
      <ul className={styles.myFriends}>
        {friends.map(item => {
          return (
            <li className={styles.friendItem} key={item.id}>
              <FriendListItem
                avatar={item.avatar}
                name={item.name}
                isOnline={item.isOnline}
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default FriendList;
