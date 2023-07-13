import React, { useState } from 'react';
import './style/index.less';

export interface SwitchProps {
  action?: boolean;
  onColor?: string;
  offColor?: string;
}

const Switch = (props: SwitchProps) => {
  const { onColor = '#409eff', offColor = '#dcdfe6', action = true } = props;
  const [isAction, setIsAction] = useState<boolean>(action);
  const switchStyle: React.CSSProperties = {
    '--switch-off': offColor,
    '--switch-on': onColor,
  } as React.CSSProperties;

  const onClick = () => {
    setIsAction((action: boolean) => !action);
  };

  return (
    <div
      className={`airkit-switch-container is-${isAction ? 'on' : 'off'}`}
      style={switchStyle}
      onClick={onClick}
    >
      <div
        className={`airkit-switch-button is-${
          isAction ? 'action' : 'not-action'
        }`}
      ></div>
    </div>
  );
};

export default Switch;
