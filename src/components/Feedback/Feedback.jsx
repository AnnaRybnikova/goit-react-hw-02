import s from "./Feedback.module.css";
import PropTypes from "prop-types";

const Feedback = ({ feedbacks, totalFeedback, positiveFeedbackPercentage }) => {
  return (
      <div>
          <ul className={s.feedback_list}>
              {Object.keys(feedbacks).map((option) => {
                  return <li className={s.feedback_list_item} key={option}>
                      {option}: {feedbacks[option]}
                  </li>
              })}
          </ul>
          <p className={s.feedback_item}>Total: {totalFeedback}</p>
          <p className={s.feedback_item}>Positive: {positiveFeedbackPercentage}%</p>
      </div>
  )
}

Feedback.propTypes = {
    feedbacks: PropTypes.object.isRequired,
    totalFeedback: PropTypes.number.isRequired,
    positiveFeedbackPercentage: PropTypes.number.isRequired
};

export default Feedback