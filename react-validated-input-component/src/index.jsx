import * as ReactDOM from 'react-dom/client';
import React from 'react';
import ValidatedInput from './validated-input';

const container = document.querySelector('#root');
const root = ReactDOM.createRoot(container);

root.render(<ValidatedInput></ValidatedInput>);
