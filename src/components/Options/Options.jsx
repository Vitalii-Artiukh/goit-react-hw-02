import { React } from 'react';
import clsx from 'clsx';
import styles from './Options.module.css';

const Options = ({ updateFeedback, resetFeedback, totalFeedback }) => {
  return (
    <div className={clsx(styles.optionsWrapper)}>
      <button
        onClick={() => updateFeedback('good')}
        className={clsx(styles.good)}
      >
        Good
      </button>
      <button
        onClick={() => updateFeedback('neutral')}
        className={clsx(styles.neutral)}
      >
        Neutral
      </button>
      <button
        onClick={() => updateFeedback('bad')}
        className={clsx(styles.bad)}
      >
        Bad
      </button>
      {totalFeedback > 0 && (
        <button onClick={() => resetFeedback()} className={clsx(styles.reset)}>
          Reset
        </button>
      )}
    </div>
  );
};

export default Options;
