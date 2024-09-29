import { React } from 'react';
import clsx from 'clsx';
import styles from './Feedback.module.css';

const Feedback = ({ feedback, totalFeedback, positiveFeedback }) => {
  return (
    <div>
      <ul className={clsx(styles.feedbackWrapper)}>
        <li>Good: {feedback.good}</li>
        <li>Neutral: {feedback.neutral}</li>
        <li>Bad: {feedback.bad}</li>
        <li>Total: {totalFeedback}</li>
        <li>Positive: {totalFeedback > 0 ? positiveFeedback : 0}%</li>
      </ul>
    </div>
  );
};

export default Feedback;
