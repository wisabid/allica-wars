import React from "react";
import { characterType } from "../App";
import Listing from "./Listing";


export default function Container({ people }: {people: characterType[]}) {
  return (
    <section className="container">
      {people.length > 0 &&
        people.map((item: characterType, index : number) => {
          return <Listing key={index} item={item} type="people" />;
        })}
    </section>
  );
}
