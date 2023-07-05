import { Carousel } from 'airkit-ui';
import React from 'react';

const App: React.FC = () => {
  return (
    <Carousel>
      <img
        src="https://telegra.ph/file/ba9d8e80a0275d0738bc3.jpg"
        alt="Image 1"
      />
      <img
        src="https://telegra.ph/file/ba9d8e80a0275d0738bc3.jpg"
        alt="Image 2"
      />
      <img
        src="https://telegra.ph/file/ba9d8e80a0275d0738bc3.jpg"
        alt="Image 3"
      />
      <img
        src="https://telegra.ph/file/ba9d8e80a0275d0738bc3.jpg"
        alt="Image 4"
      />
      <img
        src="https://missuo.ru/file/5df40ffdcb716609228b5.jpg"
        alt="Image 5"
      />
    </Carousel>
  );
};

export default App;
