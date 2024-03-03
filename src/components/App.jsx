//import { useState } from "react";

import "./App.css";

import Description from "./Description/Description";
import Options from "./Options/Options";
import Feedback from "./Feedback/Feedback";
import Notification from "./Notification/Notification";

import { useEffect, useState } from "react";

function App() {
  const [clicks, setClicks] = useState(() => {
    const savedObject = localStorage.getItem("saved-clicks");
    if (savedObject !== null) {
      return JSON.parse(savedObject);
    }
    return { good: 0, bad: 0, neutral: 0 };
  });

  useEffect(() => {
    localStorage.setItem("saved-clicks", JSON.stringify(clicks));
  }, [clicks]);

  const updateFeedback = (feedbackType) => {
    setClicks((preStat) => {
      return { ...preStat, [feedbackType]: preStat[feedbackType] + 1 };
    });
  };
  const resetButtons = () => {
    setClicks({ good: 0, bad: 0, neutral: 0 });
  };
  const { good, bad, neutral } = clicks;

  const totalFeedback = good + bad + neutral;
  const positivePersent = Math.round(
    ((clicks.good + clicks.neutral) / totalFeedback) * 100
  );

  return (
    <>
      <Description />
      <Options
        updateFeedback={updateFeedback}
        resetButtons={resetButtons}
        totalFeedback={totalFeedback}
      />
      {totalFeedback > 0 ? (
        <Feedback
          clicks={clicks}
          totalFeedback={totalFeedback}
          positivePersent={positivePersent}
        />
      ) : (
        <Notification />
      )}
      {/* THIS IS EASTEREGG */}
      {clicks.good === 3 && clicks.bad === 2 && clicks.neutral === 1 ? (
        <div>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/jwaV_YZMIqY?si=qhZrElgy0T3-i-A1"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
          <p>This is how I feel when I do homework</p>
        </div>
      ) : null}
    </>
  );
}

export default App;
