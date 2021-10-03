import React, { useState, useEffect } from "react";

// cleanup function
// second argument

const UseEffectCleanup = () => {
  const [size, setSize] = useState(window.innerWidth);
  const checkSize = () => {
    setSize(window.innerWidth);
  };
  useEffect(() => {
    console.log("useEffect invoked");
    window.addEventListener("resize", checkSize);
    // This returning function is cleanup function.
    // If this function doesn't exist, memory leak will be happened.
    // return () => {
    //   console.log("Cleanup");
    //   window.removeEventListener("resize", checkSize);
    // };
    // Alternatively, we can use empty array as dependency.
  }, []);

  return (
    <React.Fragment>
      <h1>window</h1>
      <h2>{size} px</h2>
    </React.Fragment>
  );
};

export default UseEffectCleanup;
