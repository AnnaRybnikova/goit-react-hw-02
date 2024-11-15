import PropTypes from "prop-types";

const Feedback = ({ feedbacks }) => {
  return (
      <ul>
              {Object.keys(feedbacks).map((option) => {
                  return <li key={option}>{option}: {feedbacks[option]}</li>
              })}
      </ul>
  )
}

Feedback.propTypes = {
    feedbacks: PropTypes.object.isRequired
};

export default Feedback