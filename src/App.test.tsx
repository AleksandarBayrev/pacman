import React from 'react';
import {render, screen} from '@testing-library/react';
import {PacmanApp} from './App';

test('renders pacman head', () => {
  render(<PacmanApp />);
  const pacmanHeadElement = screen.getByAltText(/pacman head/i);
  expect(pacmanHeadElement).toBeInTheDocument();
});
