import * as ReactDOM from 'react-dom/client';
import React from 'react';
import Stopwatch from './stopwatch';

const container = document.querySelector('#root');
const root = ReactDOM.createRoot(container);

root.render(<Stopwatch />);
