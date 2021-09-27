import React, { useState } from "react";

const UseStateObject = () => {
  const [name, setName] = useState("Peter");
  const [age, setAge] = useState(24);
  const [message, setMessage] = useState("Random Message");

  const changeMessage = () => {
    setName("Anderson");
    setAge(27);
    setMessage("Hello World");
  };
  return (
    <React.Fragment>
      <h3>{name}</h3>
      <h3>{age}</h3>
      <h3>{message}</h3>
      <button className="btn" onClick={changeMessage}>
        Change Info
      </button>
    </React.Fragment>
  );
};

export default UseStateObject;
