import { Peticiones } from "./03-examples/Peticiones";
import { FormUseRef } from "./04-useRef/FormUseRef";
import { useCounter } from "./hooks/useCounter";

function App() {
  const initialValue = 1;
  const { state: pepe, increment, decrement, reset } = useCounter(initialValue);

  return (
    <div className="App">
      <h1>Contando: {pepe}</h1>
      <button onClick={() => increment(1)}>Increment</button>
      <button onClick={() => decrement(1)}>Decrement</button>
      <button onClick={reset}>Reset</button>
      <Peticiones />
      <FormUseRef />
    </div>
  );
}

export default App;
