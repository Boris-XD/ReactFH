import { Peticiones } from "./03-examples/Peticiones";
import { FormUseRef } from "./04-useRef/FormUseRef";
import { RealRef } from "./04-useRef/RealRef";
import { Memo } from "./06-Memo/Memo";
import { MemoHook } from "./06-Memo/MemoHook";
import { CallbackHook } from "./07-CallBackHook/CallbackHook";
import { useCounter } from "./hooks/useCounter";
import { Padre } from "./07-Memo-CallBack-Tarea/Padre";

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
      <Memo />
      <MemoHook />
      <CallbackHook />
    */}
      <Padre />
    </div>
  );
}

export default App;
