import React, { useState } from 'react';

export default function ToggleSwitch() {
  const [active, setActive] = useState(false);

  function handleClick() {
    setActive(!active);
  }

  const className = active ? 'on' : 'off';
  const bgColor = active ? 'bg-on' : 'bg-off';
  const activeLabel = active ? 'On' : 'Off';

  return (
    <>
      <span id='toggle-container' className={bgColor}>
        <button onClick={handleClick} className={className} />
      </span>
      <label>{activeLabel}</label>
    </>
  );
}
