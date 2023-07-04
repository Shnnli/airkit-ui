import React, { useState } from 'react';
import './style/index.less';

export interface ArrowTextSliderProps {
  texts: Array<any>;
}

const ArrowTextSlider = (props: ArrowTextSliderProps) => {
  const texts = props.texts;
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? texts.length - 1 : prevIndex - 1,
    );
  };
  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === texts.length - 1 ? 0 : prevIndex + 1,
    );
  };

  return (
    <div className="airkit-arrow-text-slider-container">
      <div
        className="airkit-arrow-text-slider-arrow-button"
        onClick={handlePrev}
      >
        &larr;
      </div>
      <div className="airkit-arrow-text-slider-text">{texts[currentIndex]}</div>
      <div
        className="airkit-arrow-text-slider-arrow-button"
        onClick={handleNext}
      >
        &rarr;
      </div>
    </div>
  );
};

export default ArrowTextSlider;
