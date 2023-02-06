import * as ReactDOM from 'react-dom/client';
import React from 'react';
import ToggleSwitch from './toggle-switch';

const container = document.querySelector('#root');
const root = ReactDOM.createRoot(container);

root.render(<ToggleSwitch/>);
