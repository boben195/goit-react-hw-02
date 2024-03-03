import style from "../Options/Options.module.css";

const Options = ({ updateFeedback, resetButtons, totalFeedback }) => {
  return (
    <div>
      <button className={style.goodBtn} onClick={() => updateFeedback("good")}>
        Good
      </button>
      <button className={style.badBtn} onClick={() => updateFeedback("bad")}>
        Bad
      </button>
      <button
        className={style.neutralBtn}
        onClick={() => updateFeedback("neutral")}
      >
        Neutral
      </button>
      {totalFeedback > 0 ? (
        <button className={style.resetBtn} onClick={resetButtons}>
          Reset
        </button>
      ) : null}
    </div>
  );
};

export default Options;
