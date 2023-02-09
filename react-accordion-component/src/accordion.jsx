/* eslint-disable prefer-const */
import React, { useState } from 'react';

export default function Accordion({ inputData }) {
  const [activeIndex, setActiveIndex] = useState(undefined);

  return (
    <>
      {inputData.map((entry) => Bellow(entry, activeIndex, setActiveIndex))}
    </>
  );
}

function Bellow({ title, id, details }, activeIndex, setActiveIndex) {

  return (
    <div key={id} className='bellow' onClick={() => {
      (activeIndex !== id) ? setActiveIndex(id) : setActiveIndex(undefined);
    }}>
      <h3>{title}</h3>
      <div hidden={activeIndex !== id}>{details}</div>
    </div>
  );
}
