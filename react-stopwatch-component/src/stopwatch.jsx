import React, { useState } from 'react';

export default function Stopwatch() {
  const [time, setTime] = useState(0);
  const [intervalID, setIntervalID] = useState(undefined);

  function handlePlay() {
    if (intervalID) {
      clearInterval(intervalID);
      setIntervalID(undefined);
    } else {
      const id = setInterval(() => {
        setTime((time) => time + 1);
      }, 1000);
      setIntervalID(id);
    }
  }

  function handleTimeReset() {
    if (!intervalID) {
      setTime(0);
    }
  }

  const currentIcon = intervalID ? 'fa-solid fa-pause' : 'fa-solid fa-play';

  return (
    <div id='stopwatch-container'>
      <button id='stopwatch' onClick={handleTimeReset}>{time}</button>
      <button id='play-button' onClick={handlePlay}>
        <i className={currentIcon} />
      </button>
    </div>
  );
}
