import React, { useState } from 'react';

export default function HotButton() {
  let [clicks, setClicks] = useState(0);

  function handleClick() {
    setClicks(clicks += 1);
  }

  function createHotButton(className) {
    return (
      <button className={className} onClick={handleClick}>Hot Button</button>
    );
  }

  switch (true) {
    case clicks <= 3:
      return (createHotButton('lukewarm'));

    case clicks > 3 && clicks <= 6:
      return (createHotButton('warm'));

    case clicks > 6 && clicks <= 9:
      return (createHotButton('hot'));

    case clicks > 9 && clicks <= 12:
      return (createHotButton('hotter'));

    case clicks > 12 && clicks <= 15:
      return (createHotButton('hottest'));

    case clicks <= 18:
      return (createHotButton('nuclear'));

    default:
      return (createHotButton('nuclear'));

  }
}
