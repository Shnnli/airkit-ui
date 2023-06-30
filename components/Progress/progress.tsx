import React from 'react';
import './style/index.less';

interface ProgressProps {
  width: string | number;
}

const Progress = (props: ProgressProps) => {
  return (
    <div className="fast-ui-progress-bar">
      <div
        className="fast-ui-progress"
        style={{ width: `${props.width}` + 'px' }}
      ></div>
    </div>
  );
};

export default Progress;
