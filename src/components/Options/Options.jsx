import s from "./Options.module.css";
import PropTypes from "prop-types";

const Options = ({ feedbacks, totalFeedback, updateFeedback, resetFeedbacks }) => {
    return (
        <section className={s.options_section}>
          {Object.keys(feedbacks).map((option) => {
              return <button key={option} onClick={() => updateFeedback(option)} >
                  {option}
              </button>
          })}
          {totalFeedback > 0
              && <button onClick={() => resetFeedbacks()}>Reset</button>}
      </section>
  )
}

Options.propTypes = {
    feedbacks: PropTypes.object.isRequired,
    updateFeedback: PropTypes.func.isRequired,
    totalFeedback: PropTypes.number.isRequired,
    resetFeedbacks: PropTypes.func.isRequired
};

export default Options