import React from 'react';
import * as ReactDOM from 'react-dom/client';
import Carousel from './carousel';

const images =
[
  {
    id: 0,
    url: 'https://i.imgur.com/7UWSnsD_d.webp?maxwidth=760&fidelity=grand',
    alt: 'Hey guys did you know that...[REDACTED]...[REDACTED]?',
  },
  {
    id: 1,
    url: 'https://i.imgur.com/qeAZRuq.png',
  },
  {
    id: 2,
    url: 'https://i.imgur.com/kerbwps.png',
  },
  {
    id: 3,
    url: 'https://i.imgur.com/m01wW9j.jpg',
    alt: 'How my friends take all their pictures nowadays for some reason',
  },
  {
    id: 4,
    url: 'https://i.imgur.com/n2p9yBn.png',
    alt: 'Trauma from the Sinnoh Region following Garchomp',
  },

];

const container = document.querySelector('#root');
const root = ReactDOM.createRoot(container);

root.render(<Carousel images={images}/>);
