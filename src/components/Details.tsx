import React, { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { characterType, PeopleContext } from "../App";
import ListItem from "./ListItem";

export default function Details() {
  const { people = JSON.parse(localStorage.getItem('allica') || '{}'), update } = useContext<any>(PeopleContext);

  const { name } = useParams();
  const [character, setCharacter] = useState<any>();
  const [height, setHeight] = useState<string>();

  useEffect(() => {
    if (people.length) {
      const character = people.filter((item:characterType ) => item.name === name);
      setCharacter({ ...character, ...character[0] });
      setHeight(character[0].height);
    }
  }, [people, name]);


  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const heightNumber = e.target.value;
    setHeight(heightNumber);
    setCharacter({ ...character, height: heightNumber });
  };

  return (
    <>
      <Link to="/">Home</Link>
      <section className="details">
        <h3>{character?.name}</h3>
        <sup className="people--sup">
          <ListItem url={character?.homeworld as string} name="name" />
        </sup>
        <ul className="details__list">
          <li>
            <span>Gender : </span>
            <span>{character?.gender}</span>
          </li>
          <li>
            <span>Hair color : </span>
            <span> {character?.hair_color}</span>
          </li>
          <li>
            <span>Eye color : </span>
            <span> {character?.eye_color}</span>
          </li>
          <li>
            <span>Height : </span>
            <button
                onClick={() => {
                  update(character?.name, character.height);
                }}
              >
                Update
              </button>
            <span>
              <input
                type="text"
                value={height}
                size={5}
                onChange={handleChange}
              />
            </span>
          </li>
          
        </ul>
        <hr />
        <h4>Films</h4>
        <div className="details--films">
          {character?.films &&
            character.films.map((item: string, id: number) => {
              console.log(item);
              return <ListItem url={item} key={id} name="" />;
            })}
        </div>
      </section>
    </>
  );
}
