import React, { useRef } from "react";

export const FormUseRef = () => {
  const inputRef = useRef();

  const handleFocus = () => {
    inputRef.current.select();
    console.log(inputRef.current);
  };

  return (
    <div className="box">
      <input ref={inputRef} name="name" placeholder="Su nombre" />
      <button onClick={handleFocus}>Focus </button>
    </div>
  );
};
