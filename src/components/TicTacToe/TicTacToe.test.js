import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import TicTacToe from './TicTacToe';

describe('<TicTacToe />', () => {
  test('it should mount', () => {
    render(<TicTacToe dataTestId="TicTacToe"/>);
    screen.debug();
    const ticTacToe = screen.getByTestId('TicTacToe');

    expect(ticTacToe).toBeInTheDocument();
  });
});