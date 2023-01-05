import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Pong from './Pong';

describe('<Pong />', () => {
  test('it should mount', () => {
    render(<Pong dataTestId="Pong" />);
    
    const pong = screen.getByTestId('Pong');

    expect(pong).toBeInTheDocument();
  });
});