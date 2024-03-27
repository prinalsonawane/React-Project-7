//useRef hook part 1
import React, { useEffect, useRef } from "react";

function FocusIn() {
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <div>
      <input type="text" ref={inputRef}></input>
    </div>
  );
}

export default FocusIn;
