import React from 'react';

import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

jest.mock('recharts');
import Graph from './Graph';


describe('<Graph />', () => {
  test('it should mount', () => {
     render(<Graph dataTestId="Graph" />);
    
     const graph = screen.getByTestId('Graph');

     expect(graph).toBeInTheDocument();
  });
});