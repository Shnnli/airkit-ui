import React from 'react';
import './style/index.less';

export interface ButtonProps {
  type?: 'primary' | 'success' | 'warning' | 'danger';
  onClick?: () => void;
  children?: React.ReactNode;
}

const Button = (props: ButtonProps) => {
  const { type, children, onClick } = props;
  return (
    <button
      className={`airkit-button witch-${type}`}
      type="button"
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
