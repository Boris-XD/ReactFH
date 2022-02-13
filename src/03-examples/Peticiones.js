import React from "react";
import { useCounter } from "../hooks/useCounter";
import { useFetch } from "../hooks/useFetch";

export const Peticiones = () => {
  const initialValue = 1;
  const { counter, increment } = useCounter(initialValue);
  const getInformation = useFetch(
    `https://breakingbadapi.com/api/quotes/${counter}`
  );
  const { data, loading } = getInformation;
  const { author, quote } = !!data && data[0];
  return (
    <div className="box">
      <h2>Peticiones Custom Hooks</h2>
      {loading ? (
        <span>Cargando</span>
      ) : (
        <blockquote>
          <p>{quote}</p>
          <footer>{author}</footer>
        </blockquote>
      )}
      <button>Anterior</button> -{" "}
      <button onClick={() => increment(1)}>Siguiente</button>
    </div>
  );
};
