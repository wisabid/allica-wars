import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Listing from './Listing';
import {MemoryRouter} from 'react-router-dom'

describe('App', () => {
  const prop = {
    "name": "Luke Skywalker",
    "height": "172",
    "mass": "77",
    "hair_color": "blond",
    "skin_color": "fair",
    "eye_color": "blue",
    "birth_year": "19BBY",
    "gender": "male",
    "homeworld": "https://swapi.dev/api/planets/1/",
    "films": [
      "https://swapi.dev/api/films/1/",
      "https://swapi.dev/api/films/2/",
      "https://swapi.dev/api/films/3/",
      "https://swapi.dev/api/films/6/"
    ],
    "species": [],
    "vehicles": [
      "https://swapi.dev/api/vehicles/14/",
      "https://swapi.dev/api/vehicles/30/"
    ],
    "starships": [
      "https://swapi.dev/api/starships/12/",
      "https://swapi.dev/api/starships/22/"
    ],
    "created": "2014-12-09T13:50:51.644000Z",
    "edited": "2014-12-20T21:17:56.891000Z",
    "url": "https://swapi.dev/api/people/1/"
  };

  test('renders Listing component', async () => {
    render(<Listing item={prop} type=""/>, {wrapper: MemoryRouter});
    expect(screen.getByText(/Luke Skywalker/i)).toBeInTheDocument()
    expect(screen.getByText(/male/i)).toBeInTheDocument();

    // fireEvent.click(screen.getByText('Luke Skywalker'));

    // expect(MemoryRouter).toHaveBeenCalled()
  });
});