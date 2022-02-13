import { Peticiones } from "./03-examples/Peticiones";
import { FormUseRef } from "./04-useRef/FormUseRef";
import { RealRef } from "./04-useRef/RealRef";
import { Memo } from "./06-Memo/Memo";
import { useCounter } from "./hooks/useCounter";

function App() {
  const initialValue = 1;
  const { state: pepe, increment, decrement, reset } = useCounter(initialValue);

  return (
    <div className="App">
      {/*
      <h1>Contando: {pepe}</h1>
      <button onClick={() => increment(1)}>Increment</button>
      <button onClick={() => decrement(1)}>Decrement</button>
      <button onClick={reset}>Reset</button>
      <Peticiones />
      <FormUseRef />
      <hr />
      <RealRef />
    */}
      <Memo />
    </div>
  );
}

export default App;
