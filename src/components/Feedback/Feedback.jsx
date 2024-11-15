import PropTypes from "prop-types";

const Feedback = ({ feedbacks, totalFeedback, positiveFeedbackPercentage }) => {
  return (
      <div>
          <ul>
              {Object.keys(feedbacks).map((option) => {
                  return <li key={option}>{option}: {feedbacks[option]}</li>
              })}
          </ul>
          <p>Total: {totalFeedback}</p>
          <p>Positive: {positiveFeedbackPercentage}%</p>
      </div>
  )
}

Feedback.propTypes = {
    feedbacks: PropTypes.object.isRequired,
    totalFeedback: PropTypes.number.isRequired,
    positiveFeedbackPercentage: PropTypes.number.isRequired
};

export default Feedback