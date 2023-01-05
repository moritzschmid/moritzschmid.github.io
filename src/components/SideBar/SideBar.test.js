import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import SideBar from './SideBar';
import { HashRouter as Router } from "react-router-dom";


describe('<SideBar />', () => {
  test('it should mount', () => {
     render(<Router><SideBar dataTestId="SideBar" /></Router>);
    screen.debug();
    const sideBar = screen.getByTestId('SideBar');
     expect(sideBar).toBeInTheDocument();
  });
});