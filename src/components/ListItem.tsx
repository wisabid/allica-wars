import React from "react";
import { useFetch } from "../hooks";
import Listing from "./Listing";

export default function ListItem({ url, name = "" }: {url:string, name?:string}) {
  const result: any = useFetch(url);
  return (
    <span>
      {result[0] && name ? result[0][name] : <Listing item={result[0]} type="" />}
    </span>
  );
}
