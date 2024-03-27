//useCallback hook
import React from "react";

function Title() {
  console.log("Rendering Title");
  return <h2>useCallback function</h2>;
}

export default React.memo(Title);
