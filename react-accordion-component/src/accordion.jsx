/* eslint-disable prefer-const */
import React, { useState } from 'react';

export default function Accordion({ inputData }) {
  return (
    <div>
      {inputData.map((entry) => Bellow(entry))}
    </div>
  );
}

function Bellow({ title, id, details }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = (e) => {
    setIsOpen(!isOpen);
  };

  return (
    <div key={id} className='bellow' onClick={handleClick}>
      <h3>{title}</h3>
      <div hidden={!isOpen}>{details}</div>
    </div>
  );
}
// extract single bar as a component then build accordion by mapping each object to generate individual bars in the accordion then return it
