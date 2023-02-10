/* eslint-disable prefer-const */
import React, { useState } from 'react';

export default function Accordion({ inputData }) {
  const [activeIndex, setActiveIndex] = useState(undefined);

  return (
    <>
      {inputData.map((entry) => {
        return (
          <Bellow
              key={entry.id}
              title={entry.title}
              details={entry.details}
            isActive={(activeIndex === entry.id)}
            setActiveIndex={() => (activeIndex !== entry.id) ? setActiveIndex(entry.id) : setActiveIndex(undefined)} />
        );
      })}
    </>
  );
}

function Bellow({ title, id, details, isActive, setActiveIndex }) {

  return (
    <div key={id} className='bellow' onClick={setActiveIndex}>
      <h3>{title}</h3>
      {
      isActive && <div>{details}</div>
      }
    </div>
  );
}
