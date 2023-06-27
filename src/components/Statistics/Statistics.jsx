import css from '../Statistics/Statistics.module.css';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <div>
      <ul className={css.statistics}>
        <li>Good: {good}</li>
        <li>Neutral: {neutral}</li>
        <li>Bad: {bad}</li>
        <li>Feedback Amount: {total}</li>
        <li>Positive Feedback Percentage: {positivePercentage}%</li>
      </ul>
    </div>
  );
};
