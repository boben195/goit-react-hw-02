const Feedback = ({ clicks, totalFeedback, positivePersent }) => {
  return (
    <div>
      <p>Good: {clicks.good}</p>
      <p>Bad: {clicks.bad}</p>
      <p>Neutral: {clicks.neutral}</p>
      <p>Total: {totalFeedback}</p>
      <p>Positive: {positivePersent} %</p>
    </div>
  );
};

export default Feedback;
