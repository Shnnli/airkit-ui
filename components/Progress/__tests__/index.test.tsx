import { render } from '@testing-library/react';
import React from 'react';
import Progress from '..';

describe('Progress', () => {
  it('renders progress bar with correct width', () => {
    const width = '50';
    const { container } = render(<Progress width={width} />);
    const progressBar = container.querySelector(
      '.airkit-ui-progress',
    ) as Element;

    expect(progressBar).not.toBeNull();

    const progressBarStyle = getComputedStyle(progressBar);
    expect(progressBarStyle.width).toBe(`${width}px`);
  });
});
