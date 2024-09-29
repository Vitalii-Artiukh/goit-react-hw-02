import clsx from 'clsx';
import { useState, useEffect } from 'react';
import styles from './components/App.module.css';
import Feedback from './components/Feedback/Feedback';
import Options from './components/Options/Options';
import Description from './components/Description/Description';
import Notification from './components/Notification/Notification';

////////////  ініціюю фідбек об'єкт  /////////////
const listFeedback = {
  good: 0,
  neutral: 0,
  bad: 0,
};

const App = () => {
  ///////////  перевіряю відгуки на збереження  /////
  const [feedback, setFeedback] = useState(() => {
    const savedFeedback = localStorage.getItem('saveFeedbackResult');
    if (savedFeedback !== null) {
      return JSON.parse(savedFeedback);
    }
    return listFeedback;
  });

  /////// змінюю відгуки  ///////
  const updateFeedback = feedbackType => {
    setFeedback({ ...feedback, [feedbackType]: feedback[feedbackType] + 1 });
  };

  ////////////  записую відгуки до localStorage  /////////////////
  useEffect(() => {
    localStorage.setItem('saveFeedbackResult', JSON.stringify(feedback));
  }, [feedback]);

  useEffect(() => {
    document.title = 'Feedback';
  });

  ///////  обнуляю відгуки  //////
  const resetFeedback = () => {
    setFeedback({
      good: (feedback.good = 0),
      neutral: (feedback.neutral = 0),
      bad: (feedback.bad = 0),
    });
  };

  const totalFeedback = feedback.good + feedback.neutral + feedback.bad;
  const positiveFeedback = Math.round((feedback.good / totalFeedback) * 100);

  //////  render  /////
  return (
    <div className={clsx(styles.appWrapper)}>
      <Description />
      <Options
        updateFeedback={updateFeedback}
        resetFeedback={resetFeedback}
        totalFeedback={totalFeedback}
      />
      {totalFeedback > 0 ? (
        <Feedback
          feedback={feedback}
          totalFeedback={totalFeedback}
          positiveFeedback={positiveFeedback}
        />
      ) : (
        <Notification totalFeedback={totalFeedback} />
      )}
    </div>
  );
};

export default App;
