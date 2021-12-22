import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import ListItem from './ListItem';
import {MemoryRouter} from 'react-router-dom'

jest.mock('../hooks/index', () => {
  return {
    useFetch : () => {
      return [{name: "Tom Cruise"}]
    }
  }
})

describe('App', () => {

  test('renders ListItem component', async () => {
    
    render(<ListItem url="https://swapi.dev/api/planets/1/" name="name"/>, {wrapper: MemoryRouter});
    expect(screen.getByText(/Tom Cruise/i)).toBeInTheDocument()
  });

});