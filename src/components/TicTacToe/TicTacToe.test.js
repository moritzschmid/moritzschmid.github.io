import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import TicTacToe from './TicTacToe';

describe('<TicTacToe />', () => {
  test('it should mount', () => {
    render(<TicTacToe />);
    
    const ticTacToe = screen.getByTestId('TicTacToe');

    expect(ticTacToe).toBeInTheDocument();
  });
});