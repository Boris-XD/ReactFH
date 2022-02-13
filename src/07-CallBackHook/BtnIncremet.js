import { memo } from "react";

export const BtnIncremet = memo(({ increment }) => {
  console.log("Me volvi a Generar :(");
  return <button onClick={() => increment(5)}>Increment</button>;
});
