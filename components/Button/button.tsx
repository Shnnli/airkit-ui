import React from 'react';
import './style/index.less';

export interface ButtonProps {
  type?: 'primary' | 'success' | 'warning' | 'danger';
  children?: React.ReactNode;
}

const Button = (props: ButtonProps) => {
  const { type, children } = props;
  return (
    <button className={`airkit-button witch-${type}`} type="button">
      {children}
    </button>
  );
};

export default Button;
