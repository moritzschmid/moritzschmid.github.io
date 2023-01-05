import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import AppleMusic from './AppleMusic';

describe('<AppleMusic />', () => {
  test('it should mount', () => {
    render(<AppleMusic dataTestId="AppleMusic" />);
    const appleMusic = screen.getByTestId('AppleMusic');
    screen.debug();

    expect(appleMusic).toBeInTheDocument();
  });
});