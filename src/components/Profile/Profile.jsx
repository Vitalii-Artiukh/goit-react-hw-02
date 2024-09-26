import clsx from 'clsx';

import styles from './Profile.module.css';

// import React from 'react';

const Profile = ({ username, tag, location, avatar, stats }) => {
  return (
    <div className={styles.profileWrapper}>
      <div className={styles.avatarWrapper}>
        <img
          className={styles.image}
          src={avatar}
          alt={'avatar: ' + username}
        />
        <p className={styles.textName}>{username}</p>
        <p className={styles.textLast}>{tag}</p>
        <p className={styles.textLast}>{location}</p>
      </div>

      <ul className={styles.stats}>
        <li className={styles.statsItemFirst}>
          <span>Followers</span>
          <span className={styles.statsResault}>{stats.followers}</span>
        </li>
        <li className={styles.statsItem}>
          <span>Views</span>
          <span className={styles.statsResault}>{stats.views}</span>
        </li>
        <li className={styles.statsItemLast}>
          <span>Likes</span>
          <span className={styles.statsResault}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};

export default Profile;
