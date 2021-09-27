import React, { useState } from "react";

const UseStateBasics = () => {
  const [text, setText] = useState("Title unchanged");
  const handleClick = () => {
    setText("Title Changed");
  };
  return (
    <React.Fragment>
      <h2>{text}</h2>
      <button className="btn" onClick={handleClick}>
        Change Title
      </button>
    </React.Fragment>
  );
};

export default UseStateBasics;
