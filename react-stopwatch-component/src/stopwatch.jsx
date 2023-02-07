import React, { useState } from 'react';

export default function Stopwatch() {
  const [play, setPlay] = useState(false);
  const [time, setTime] = useState(0);
  const [intervalID, setIntervalID] = useState(0);

  function handlePlay() {
    clearInterval(intervalID);
    setPlay(!play);
    const id = setInterval(() => {
      setTime((time) => time + 1);
    }, 1000);
    setIntervalID(id);
    if (play) clearInterval(id);
  }

  function handleTimeReset() {
    if (!play) {
      setTime(0);
    }
  }

  const currentIcon = play ? 'fa-solid fa-pause' : 'fa-solid fa-play';

  return (
    <div id='stopwatch-container'>
      <button id='stopwatch' onClick={handleTimeReset}>{time}</button>
      <button id='play-button' onClick={handlePlay}>
        <i className={currentIcon} />
      </button>
    </div>
  );
}
