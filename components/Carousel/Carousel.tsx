import React, { useState } from 'react';
import './style/index.less';

export interface CarouselProps {
  children: React.ReactNode;
  style?: React.CSSProperties;
}

const Carousel = (props: CarouselProps) => {
  const { children, style } = props;
  const [currentIndex, setCurrentIndex] = useState(0);
  const count = React.Children.count(children);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? count - 1 : prevIndex - 1,
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % count);
  };

  const itemStyle: React.CSSProperties = {
    '--current-index': currentIndex.toString(),
  } as React.CSSProperties;

  return (
    <div className="carousel" style={style}>
      <button type="button" className="prev-button" onClick={handlePrev}>
        Prev
      </button>
      <div className="carousel-item" style={itemStyle}>
        {children}
      </div>
      <button type="button" className="next-button" onClick={handleNext}>
        Next
      </button>
      <div className="carousel-dots">
        {Array(count)
          .fill(1)
          .map((_, index) => (
            <span
              key={index}
              className={`dot ${index === currentIndex ? 'active' : ''}`}
              onClick={() => {
                setCurrentIndex(index);
              }}
            />
          ))}
      </div>
    </div>
  );
};

export default Carousel;
