import { useEffect, useState } from "react";
import { allicaFetch } from "../utils";

export const useFetch = (url: string): any => {
  const [response = "", setResponse] = useState();

  useEffect(() => {
    const fetchSomething = async () => {
      const resp = await allicaFetch(url);
      setResponse(resp);
    };
    if (url) {
      fetchSomething();
    }
  }, [url]);

  return [response];
};
