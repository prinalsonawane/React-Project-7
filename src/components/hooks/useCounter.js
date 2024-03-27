//useCounter Custom hook
import { useState } from "react";

function useCounter(initialState = 0, value) {
  const [count, setCount] = useState(initialState);
  const increment = () => {
    setCount(count + value);
  };
  const decrement = () => {
    setCount(count - value);
  };
  const reset = () => {
    setCount(initialState);
  };
  return [count, increment, decrement, reset];
}

export default useCounter;
