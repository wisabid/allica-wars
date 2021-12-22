import React from "react";
import { Link } from "react-router-dom";
import Planet from "./ListItem";
import { characterType } from "../App";


export default function Listing({ item, type }: {item:characterType, type: string }) {
  const { name, gender, homeworld, title } = item;
  return (
    <article className={type}>
      {name && (
        <Link to={`/details/${name}`}>
          <h3>{name}</h3>
        </Link>
      )}
      {title && <h5>{title}</h5>}
      {(gender || homeworld) && (
        <sup className="people--sup">
          {gender} | <Planet url={homeworld} name="name" />
        </sup>
      )}
    </article>
  );
}
