import React, { useState } from "react";
// JS
// const input = document.getElementById('myText');
// const inputValue = input.value
// React
// value, onChange
// without onChange, we cannot change the value of the input, because it's linked to useState, in this case.

const ControlledInputs = () => {
  const [firstName, setFristName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(firstName, email);
  };

  return (
    <article>
      <form className="form" onSubmit={handleSubmit}>
        <div className="form-control">
          <label htmlFor="firstName">Name: </label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={firstName}
            placeholder="Your name"
            onChange={(event) => setFristName(event.target.value)}
          />
        </div>
        <div className="form-control">
          <label htmlFor="email">Email: </label>
          <input
            type="text"
            id="email"
            name="email"
            value={email}
            placeholder="abc123@example.com"
            onChange={(event) => setEmail(event.target.value)}
          />
        </div>
        <button type="submit">Add person</button>
      </form>
    </article>
  );
};

export default ControlledInputs;
