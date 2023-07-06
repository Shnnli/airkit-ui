import { Divider, DividerProps } from 'airkit-ui';
import React, { useState } from 'react';
type ContentPosition = DividerProps['contentPosition'];
const App: React.FC = () => {
  const [position, setPosition] =
    useState<DividerProps['contentPosition']>('center');

  const onClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const value: ContentPosition = e.currentTarget
      .textContent as ContentPosition;
    setPosition(value);
  };

  return (
    <div>
      <div>
        <button type="button" onClick={onClick}>
          left
        </button>
        <button type="button" onClick={onClick}>
          center
        </button>
        <button type="button" onClick={onClick}>
          right
        </button>
      </div>

      <span>大漠孤烟直</span>
      <Divider contentPosition={position}>使至塞上</Divider>
      <span>长河落日圆</span>
    </div>
  );
};

export default App;
