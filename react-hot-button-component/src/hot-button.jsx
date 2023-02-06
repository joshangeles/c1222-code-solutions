/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import * as ReactDOM from 'react-dom/client';

export default function HotButton() {
  const [clicks, setClicks] = useState(0);

  function handleClick() {
    setClicks(clicks + 1);
    console.log(clicks);
  }

  function createHotButton(className) {
    return (
      <button className={className} onClick={handleClick}>Hot Button</button>
    );
  }
}
