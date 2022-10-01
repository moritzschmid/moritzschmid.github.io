import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import AppleMusic from './AppleMusic';

describe('<AppleMusic />', () => {
  test('it should mount', () => {
    render(<AppleMusic />);
    
    const AppleMusic = screen.getByTestId('AppleMusic');

    expect(AppleMusic).toBeInTheDocument();
  });
});