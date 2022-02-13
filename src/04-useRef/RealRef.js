import React, { useState } from "react";
import { Peticiones } from "../03-examples/Peticiones";

export const RealRef = () => {
  const [show, setShow] = useState(true);
  return (
    <div className="box">
      <h1>Real Example de HREF - unMounting App</h1>
      {show && <Peticiones />}
      <button
        onClick={() => {
          setShow(!show);
        }}
      >
        Show/Hide
      </button>
    </div>
  );
};
