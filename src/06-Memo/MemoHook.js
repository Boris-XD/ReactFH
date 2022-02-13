import React, { useMemo, useState } from "react";
import { procesoPesado } from "../helpers/procesoPesado";
import { useCounter } from "../hooks/useCounter";

export const MemoHook = () => {
  const { counter, increment } = useCounter(5000);
  const [show, setShow] = useState(true);

  const memoProcesoPesado = useMemo(() => procesoPesado(counter), [counter]);

  return (
    <div className="box">
      <h2>Memo</h2>
      <h4>
        Counter: <small> {counter} </small>
      </h4>
      <p>{memoProcesoPesado}</p>
      <button
        onClick={() => {
          increment(1);
        }}
      >
        Increment
      </button>
      <button onClick={() => setShow(!show)}>
        Show/Hide {JSON.stringify(show)}
      </button>
    </div>
  );
};
