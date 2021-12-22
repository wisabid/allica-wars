import React, { createContext, useEffect, useState } from 'react';
import { Routes, Route } from "react-router-dom";
import Container from "./components/Container";
import Details from "./components/Details";
import { useFetch } from "./hooks";
import './App.css';

export const PeopleContext = createContext({});

export type characterType = { 
    name: string;
    height: string;
    mass: string;
    hair_color: string;
    skin_color: string;
    eye_color: string;
    birth_year: string;
    gender: string;
    homeworld: string;
    films: string[];
    species: string[];
    vehicles: string[];
    starships: string[];
    created: string;
    edited: string;
    url: string;
    title?: string;
}

export type contextType = {
  people: characterType[];
  update: (nm: string, char: characterType) => void
}

const SWAPI_API = "https://swapi.dev/api/people";

function App() {
  const [response] = useFetch(SWAPI_API);
  const [people, setPeople] = useState<characterType[]>([]);

  const handleUpdate = (nm: string, newValue : string) => {
    const newPeople = people.map((item: characterType) => {
      if (item.name === nm) {
        item.height = newValue;
      }
      return item;
    });
    setPeople(newPeople);
  };
  const value = {
    people,
    update: handleUpdate
  };
  useEffect(() => {
    if (response.results) {
      setPeople([...people, ...response.results]);
    }
  }, [response]);

  useEffect(() => {
    if (people.length) {
        localStorage.setItem('allica', JSON.stringify(people))
    }
  }, [people]);

  return (
    <PeopleContext.Provider value={value}>
      <div className="App">
        <h1>Star Wars Universe</h1>
        <Routes>
          <Route path="/" element={<Container people={people} />} />
          <Route path="/details/:name" element={<Details />} />
        </Routes>
        {/* <Container /> */}
      </div>
    </PeopleContext.Provider>
  );
}

export default App;
