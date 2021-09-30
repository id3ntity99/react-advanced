import React, { useState, useEffect } from "react";
// by default useEffect runs after every re-render
// useEffect runs side-effect after rerender.
// cleanup function
// second parameter
const UseEffectBasics = () => {
  const [value, setValue] = useState(0);
  useEffect(() => {
    console.log("Call useEffect");
    document.title = `New Messages(${value})`;
  });
  console.log("Components rerendered");
  return (
    <React.Fragment>
      <h1>{value}</h1>
      <button className="btn" onClick={() => setValue(value + 1)}>
        Click me
      </button>
    </React.Fragment>
  );
};

export default UseEffectBasics;
