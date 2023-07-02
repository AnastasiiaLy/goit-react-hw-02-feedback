import css from './FeedbackOptions.module.css';
import { IoIosHeartEmpty, IoIosHeartHalf } from 'react-icons/io';
import { IoHeartDislikeOutline } from 'react-icons/io5';
import PropTypes from 'prop-types';

export const FeedbackOptions = ({
  onGoodFeedback,
  onNeutralFeedback,
  onBadFeedback,
}) => {
  return (
    <div className={css.feedbackPicker}>
      <button
        type="button"
        onClick={onGoodFeedback}
        className={`${css.btn} ${css.good}`}
      >
        <IoIosHeartEmpty className={css.icon} size={25} color="#37667E" />
        Good
      </button>
      <button
        type="button"
        onClick={onNeutralFeedback}
        className={`${css.btn} ${css.neutral}`}
      >
        <IoIosHeartHalf className={css.icon} size={25} color="#37667E" />
        Neutral
      </button>
      <button
        type="button"
        onClick={onBadFeedback}
        className={`${css.btn} ${css.bad}`}
      >
        <IoHeartDislikeOutline className={css.icon} size={25} color="#37667E" />
        Bad
      </button>
    </div>
  );
};

FeedbackOptions.propTypes = {
  onGoodFeedback: PropTypes.func.isRequired,
  onNeutralFeedback: PropTypes.func.isRequired,
  onBadFeedback: PropTypes.func.isRequired,
};
