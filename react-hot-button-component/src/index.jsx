import * as ReactDOM from 'react-dom/client';
import HotButton from './hot-button';

const container = document.querySelector('#root');

const root = ReactDOM.createRoot(container);
root.render(HotButton());
