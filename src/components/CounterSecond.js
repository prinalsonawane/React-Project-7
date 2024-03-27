//useCounter custom hook
import React, { useState } from "react";
import useCounter from "./hooks/useCounter";

function CounterFirst() {
  const [count, increment, decrement, reset] = useCounter(10, 20);
  return (
    <div>
      <h2>Counter-{count}</h2>
      <button onClick={increment}>increment</button>
      <button onClick={decrement}>decreent</button>
      <button onClick={reset}>reset</button>
    </div>
  );
}
export default CounterFirst;
