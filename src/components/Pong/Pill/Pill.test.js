import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Pill from './Pill';

describe('<Pill />', () => {
  test('it should mount', () => {
    render(<Pill />);
    
    const pill = screen.getByTestId('Pill');

    expect(pill).toBeInTheDocument();
  });
});