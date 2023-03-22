import React from 'react';

import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import Graph from './Graph';

class ResizeObserver {
  observe() { }
  unobserve() { }
}

describe('<Graph />', () => {
  window.ResizeObserver = ResizeObserver;

  test('it should mount', () => {
    render(<Graph dataTestId="Graph" />);

    const graph = screen.getByTestId('Graph');

    expect(graph).toBeInTheDocument();
  });
});