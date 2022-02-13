import React, { useCallback, useState } from "react";
import { BtnIncremet } from "./BtnIncremet";

export const CallbackHook = () => {
  const [counter, setCounter] = useState(10);
  console.log("CallBack Function ");

  const setIncrementCallback = useCallback(
    (num) => {
      setCounter((c) => c + num);
    },
    [setCounter]
  );

  return (
    <div>
      <h2>Pendiente a Implementar</h2>
      <h1>useCallBack Hook: {counter}</h1>
      <hr />
      <BtnIncremet increment={setIncrementCallback} />
    </div>
  );
};
