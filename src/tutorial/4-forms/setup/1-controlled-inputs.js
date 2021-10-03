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
  const [people, setPeople] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (firstName && email) {
      const person = { id: new Date().getTime().toString(), firstName, email }; // This ES6 syntax is exactly same as the object below.
      //const person = { firstName: firstName, eamil: email };
      setPeople((people) => {
        return [...people, person];
      });

      // set Firstname and Email to empty string just for latter use.
      setFristName("");
      setEmail("");
    } else {
      console.log("empty values in inputs");
    }
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
      {people.map((person) => {
        const { id, firstName, email } = person; // This also is Javascript's syntax, not React specific.
        return (
          <div key={id} className="item">
            <h4>{firstName}</h4>
            <p>{email}</p>
          </div>
        );
      })}
    </article>
  );
};

export default ControlledInputs;
