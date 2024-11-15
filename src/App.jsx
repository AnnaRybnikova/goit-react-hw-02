import { useState } from 'react'
import Description from './components/Description/Description';
import Options from './components/Options/Options';
import Feedback from './components/Feedback/Feedback';
import Notification from './components/Notification/Notification';
import './App.css'

function App() {
  const initialFeedbacksObject = {
    Good: 0,
    Neutral: 0,
    Bad: 0
  };

  const [feedbacks, setFeedbacks] = useState(initialFeedbacksObject);
  const totalFeedback = Object.values(feedbacks).reduce((a, b) => a + b, 0);


  const updateFeedback = feedbackType => { 
    setFeedbacks(prev => ({
      ...prev,
      [feedbackType]: prev[feedbackType] + 1,
    }));
  }

  const resetFeedbacks = () => {
    setFeedbacks(initialFeedbacksObject)
  }

  return (
    <>
      <Description />
      <Options
        feedbacks={feedbacks}
        updateFeedback={updateFeedback}
        totalFeedback={totalFeedback}
        resetFeedbacks={resetFeedbacks}
      />
      {(totalFeedback > 0)
        ? <Feedback
          feedbacks={feedbacks}
          totalFeedback={totalFeedback}
          positiveFeedbackPercentage={Math.round((feedbacks.Good / totalFeedback) * 100)} />
        : <Notification />}
    </>
  )
}

export default App
