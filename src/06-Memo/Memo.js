import React, { useState } from "react";
import { useCounter } from "../hooks/useCounter";
import { Small } from "./Small";

export const Memo = () => {
  const { counter, increment } = useCounter(10);
  const [show, setShow] = useState(true);

  return (
    <div className="box">
      <h2>Memo</h2>
      <h4>
        Counter: <Small value={counter} />
      </h4>
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
