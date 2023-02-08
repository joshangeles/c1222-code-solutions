import React from 'react';
import * as ReactDOM from 'react-dom/client';
import AppDrawer from './app-drawer';

const container = document.querySelector('#root');
const root = ReactDOM.createRoot(container);

root.render(<AppDrawer/>);
