import React, { useState } from "react";
// short-circuit evaluation
// ternary operator

const ShortCircuit = () => {
  const [text, setText] = useState("");
  const firstValue = text || "hello world";
  // Wether text is empty or not, secondValue will be the second operand, "Hello world"
  const secondValue = text && "hello world";

  return (
    <React.Fragment>
      {/* <h1>{firstValue}</h1>
      <h1>value: {secondValue}</h1> */}
      <h1>{text || "john doe"}</h1>
      {text && <h1>hello world</h1>}
      {!text && <h1>hello world</h1>}
    </React.Fragment>
  );
};

export default ShortCircuit;
