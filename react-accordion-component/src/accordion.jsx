/* eslint-disable prefer-const */
import React, { useState } from 'react';

export default function Accordion({ inputData }) {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div>
      {inputData.map((entry) => Bellow(entry, activeIndex, setActiveIndex))}
    </div>
  );
}

function Bellow({ title, id, details }, activeIndex, setActiveIndex) {

  return (
    <div key={id} className='bellow' onClick={() => {
      (activeIndex !== id) ? setActiveIndex(id) : setActiveIndex(0);
    }}>
      <h3>{title}</h3>
      <div hidden={activeIndex !== id}>{details}</div>
    </div>
  );
}
