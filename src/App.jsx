import clsx from 'clsx';
import { useState, react, useEffect, Children } from 'react';
import styles from './components/App.module.css';
import Feedback from './components/Feedback/Feedback';
import Options from './components/Options/Options';
import Description from './components/Description/Description';
import Notification from './components/Notification/Notification';

const App = () => {
  ///////////  зберігаю типи відгуків на початок  /////
  const [feedback, setFeedback] = useState({ good: 0, neutral: 0, bad: 0 });

  const [] = useState(() => {
    const savedData = localStorage.getItem('saveFeedbackResult');
    console.log({ savedData });
    if (savedData === null) {
      return;
    }
    // setFeedback({ savedData });

    // console.log(savedData);
    // JSON.parse(window.localStorage.getItem('saveFeedbackResult'));
    //
  });

  /////// змінюю відгуки  ///////
  const updateFeedback = feedbackType => {
    setFeedback({ ...feedback, [feedbackType]: feedback[feedbackType] + 1 });
  };

  useEffect(() => {
    window.localStorage.setItem(
      'saveFeedbackResult',
      JSON.stringify({ feedback })
    );
  }, [feedback]);

  ///////  обнуляю відгуки  //////
  const resetFeedback = () => {
    setFeedback({
      good: (feedback.good = 0),
      neutral: (feedback.neutral = 0),
      bad: (feedback.bad = 0),
    });
  };

  const totalFeedback = feedback.good + feedback.neutral + feedback.bad;

  //////  render  /////
  return (
    <div className={clsx(styles.appWrapper)}>
      <Description />
      <Options
        updateFeedback={updateFeedback}
        resetFeedback={resetFeedback}
        totalFeedback={totalFeedback}
      />
      <Notification totalFeedback={totalFeedback} />
      <Feedback feedback={feedback} totalFeedback={totalFeedback} />
    </div>
  );
};

export default App;
