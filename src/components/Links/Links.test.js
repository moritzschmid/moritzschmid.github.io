import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Links from './Links';

describe('<Links />', () => {
  test('it should mount', () => {
   render(<Links dataTestId={"Links"}/>);
    
   screen.debug();
   const l = screen.getByTestId('Links');
   expect(l).toBeInTheDocument();

    const ll = screen.getByText('Learn React');

    expect(ll).toBeInTheDocument();
  });
});