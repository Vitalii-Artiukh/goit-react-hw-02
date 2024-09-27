import { React, useState, useEffect } from 'react';
import clsx from 'clsx';
import styles from './Options.module.css';

const Options = ({ updateFeedback, resetFeedback, totalFeedback }) => {
  return (
    <div className={clsx(styles.optionsWrapper)}>
      <button
        onClick={() => updateFeedback('good')}
        className={clsx(styles.button)}
      >
        Good
      </button>
      <button
        onClick={() => updateFeedback('neutral')}
        className={clsx(styles.button)}
      >
        Neutral
      </button>
      <button
        onClick={() => updateFeedback('bad')}
        className={clsx(styles.button)}
      >
        Bad
      </button>
      {totalFeedback > 0 && (
        <button onClick={() => resetFeedback()} className={clsx(styles.button)}>
          Reset
        </button>
      )}
    </div>
  );
};

export default Options;
