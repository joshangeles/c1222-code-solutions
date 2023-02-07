// import React, { useState } from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// let interval = null;

// export default function Stopwatch() {
//   const [play, setPlay] = useState(false);
//   const [time, setTime] = useState(0);
//   if (interval) clearInterval(interval);
//   function handlePlay() {
//     setPlay(!play);
//   }

//   // function handleTime() {
//   //   interval = setInterval(setTime(time + 1), 1000);
//   // }

//   const currentIcon = play ? 'fa-solid fa-pause' : 'fa-solid fa-play';

//   return (
//     <div id='stopwatch-container'>
//       <button id='stopwatch'>{time}</button>
//       <button id='play-button' onClick={handlePlay}>
//         <i className={currentIcon} />
//       </button>
//     </div>
//   );
// }
