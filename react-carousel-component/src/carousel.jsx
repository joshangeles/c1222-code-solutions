/* eslint-disable prefer-const */
import React, { useState, useEffect, useCallback } from 'react';

export default function Carousel({ images }) {
  const [activeIndex, setActiveIndex] = useState(0);

  function handleNext(e) {
    setActiveIndex((current) => (current + 1) % images.length);
  }

  function handlePrev(e) {
    setActiveIndex((current) => ((current - 1) + images.length) % images.length);
  }

  const cachedHandleNext = useCallback(handleNext);

  useEffect(() => {
    const autoNext = setInterval(cachedHandleNext, 3000);

    return () => clearInterval(autoNext);
  }, [activeIndex]);

  const circles = images.map((image) => {
    return (
      <i key={image.id}
         className={(activeIndex === (image.id)) ? 'fa-solid fa-circle' : 'fa-regular fa-circle'}
         onClick={() => setActiveIndex(image.id)} />
    );
  });

  return (
    <div className='container'>
      <div className='row'>
        <div className='col-fourth ta-end'>
          <i className="fa-solid fa-chevron-left fa-4x"
             onClick={handlePrev}/>
        </div>
        <div className='col-half'>
          <img src={images[activeIndex].url} alt={images[activeIndex]?.alt} />
          <div id='circles'>
            {circles}
          </div>
        </div>
        <div className='col-fourth'>
          <i className="fa-solid fa-chevron-right fa-4x"
              onClick={handleNext}/>
        </div>
      </div>
    </div>
  );
}
