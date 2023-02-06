import React, { useState } from 'react';

export default function ToggleSwitch() {
  const [active, setActive] = useState(false);

  function handleClick() {
    setActive(!active);
  }

  let className = 'off';
  active ? className = 'on' : className = 'off';
  let bgColor = 'bg-off';
  active ? bgColor = 'bg-on' : bgColor = 'bg-off';

  return (
    <span id='toggle-container'
          className={bgColor}
    >
      <button
      onClick={handleClick}
      className={className}
      >

      </button>
    </span>
  );
}
