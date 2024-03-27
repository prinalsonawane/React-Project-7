//useMemo hook
import React, { useState, useMemo } from "react";

function Counter() {
  const [incrementOne, setIncrementOne] = useState(0);
  const [incrementTwo, setIncrementTwo] = useState(0);

  const IncrementOne = () => {
    setIncrementOne(incrementOne + 1);
  };

  const IncrementTwo = () => {
    setIncrementTwo(incrementTwo + 1);
  };

  const isEven = useMemo(() => {
    let i = 0;
    while (i < 2000000000) i++;
    return incrementOne % 2 === 0;
  }, [incrementOne]);

  return (
    <div>
      <div>
        <button onClick={IncrementOne}>Increment {incrementOne}</button>
        <span>{isEven ? "even" : "odd"}</span>
      </div>
      <div>
        <button onClick={IncrementTwo}>Increment {incrementTwo}</button>
      </div>
    </div>
  );
}

export default Counter;
