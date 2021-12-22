import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import {MemoryRouter} from 'react-router-dom'

test('renders App Component', () => {
  render(<App />, {wrapper: MemoryRouter});
  const linkElement = screen.getByText(/Star Wars Universe/i);
  expect(linkElement).toBeInTheDocument();
});
