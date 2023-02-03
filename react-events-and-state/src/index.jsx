import React, { useState } from 'react';
import * as ReactDOM from 'react-dom/client';

function CustomButton() {

  const [isClicked, setClick] = useState(false);

  function handleClick() {
    setClick(!isClicked);
  }

  return (
    <button onClick={handleClick}>{isClicked ? 'Thanks!' : 'Click Me!'}</button>
  );
}

const container = document.querySelector('#root');

const root = ReactDOM.createRoot(container);

root.render(CustomButton());
