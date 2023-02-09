import React from 'react';
import * as ReactDOM from 'react-dom/client';
import Accordion from './accordion';

export const data = [
  {
    title: 'Anime is literally the best thing ever',
    details: 'Anime is literally the best thing ever. All of you baka Americans who can\'t wrap your minds around it because you think your Hollywood films and TV shows you are just stupid and wrong and need to stop speaking. Literally nobody likes your opinions except the other baka Americans that don\'t understand Anime culture and the fact that Anime is truly a masterpiece of art, emotion and plot development. The characters always develop so well and so does the plot and it is just like really good. Like literally just watch it and you will understand you stupid white people. Ok, I am white but like I like anime so I\'m basically Japanese at this point. Anyways, back to the subject, have you ever heard of the best anime ever, Redo of Healer...',
    id: 1,
  },
  {
    title: 'Anime is literally the best thing ever',
    details: 'Anime is literally the best thing ever. All of you baka Americans who can\'t wrap your minds around it because you think your Hollywood films and TV shows you are just stupid and wrong and need to stop speaking. Literally nobody likes your opinions except the other baka Americans that don\'t understand Anime culture and the fact that Anime is truly a masterpiece of art, emotion and plot development. The characters always develop so well and so does the plot and it is just like really good. Like literally just watch it and you will understand you stupid white people. Ok, I am white but like I like anime so I\'m basically Japanese at this point. Anyways, back to the subject, have you ever heard of the best anime ever, Redo of Healer...',
    id: 2,
  },
  {
    title: 'Anime is literally the best thing ever',
    details: 'Anime is literally the best thing ever. All of you baka Americans who can\'t wrap your minds around it because you think your Hollywood films and TV shows you are just stupid and wrong and need to stop speaking. Literally nobody likes your opinions except the other baka Americans that don\'t understand Anime culture and the fact that Anime is truly a masterpiece of art, emotion and plot development. The characters always develop so well and so does the plot and it is just like really good. Like literally just watch it and you will understand you stupid white people. Ok, I am white but like I like anime so I\'m basically Japanese at this point. Anyways, back to the subject, have you ever heard of the best anime ever, Redo of Healer...',
    id: 3,
  },
];

const container = document.querySelector('#root');
const root = ReactDOM.createRoot(container);

root.render(<Accordion inputData={data}/>);
