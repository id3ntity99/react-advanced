import React, { useState } from "react";
// short-circuit evaluation
// ternary operator

const ShortCircuit = () => {
  const [isError, setIsError] = useState(false);
  const [text, setText] = useState("");
  // const firstValue = text || "hello world";
  // If first operand is truthy, then return second operand. If first operand is falsy, there is no return.
  // const secondValue = text && "this is second value.";

  return (
    <React.Fragment>
      {/* <h1>{firstValue}</h1>
      <h1>value: {secondValue}</h1> */}
      <h1>{text || "john doe"}</h1>
      <button className="btn" onClick={() => setIsError(!isError)}>
        Toggle Error
      </button>
      {isError && <h1>Error...</h1>}
      {isError ? <p>An Error Occured</p> : <h1>There is no error, luckily.</h1>}
    </React.Fragment>
  );
};

export default ShortCircuit;
