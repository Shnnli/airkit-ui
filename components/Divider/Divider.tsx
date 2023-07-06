import React from 'react';
import './style/index.less';

export interface DividerProps {
  direction?: 'horizontal' | 'vertical';
  borderStyle?:
    | 'dashed'
    | 'dotted'
    | 'double'
    | 'groove'
    | 'hidden'
    | 'inherit'
    | 'initial'
    | 'inset'
    | 'none'
    | 'outset'
    | 'revert'
    | 'ridge'
    | 'solid'
    | 'unset';
  contentPosition?: 'left' | 'right' | 'center';
  children?: React.ReactNode;
}

const Divider = (props: DividerProps) => {
  const {
    direction = 'horizontal',
    borderStyle = 'solid',
    contentPosition = 'center',
    children,
  } = props;

  const dividerStyle: React.CSSProperties = {
    '--airkit-border-style': borderStyle,
  } as React.CSSProperties;

  const dividerTextStyle: React.CSSProperties = {
    '--airkit-border-style': borderStyle,
  } as React.CSSProperties;

  return (
    <div
      className={`airkit-divider-${direction}`}
      role="separator"
      style={dividerStyle}
    >
      {children && direction === 'horizontal' && (
        <div
          className={`airkit-divider-text is-${contentPosition}`}
          style={dividerTextStyle}
        >
          {children}
        </div>
      )}
    </div>
  );
};

export default Divider;
