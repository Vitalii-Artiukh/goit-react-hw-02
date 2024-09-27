import { React, useState, useEffect } from 'react';
import clsx from 'clsx';
import styles from './Description.module.css';

export default function Description() {
  return (
    <div className={clsx(styles.wrapper)}>
      <h1 className={clsx(styles.title)}>Sip Happens Café</h1>
      <p>
        Please leave your feedback about our service by selecting one of the
        options below.
      </p>
    </div>
  );
}
