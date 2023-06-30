import { ImageZoom } from 'fast-ui';
import React from 'react';

const App: React.FC = () => {
  return <ImageZoom src={'http://localhost:8000/logo.png'}></ImageZoom>;
};

export default App;
