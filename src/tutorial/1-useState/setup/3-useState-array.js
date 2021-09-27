import React from "react";
import { data } from "../../../data";

const UseStateArray = () => {
  // useState sets the first item of the array to the argument in the paren.
  const [people, setPeople] = React.useState(data);

  const removeItem = (id) => {
    let newPeople = people.filter((person) => person.id !== id);
    setPeople(newPeople);
  };

  return (
    <React.Fragment>
      {people.map((person) => {
        /*
        const id = person.id;
        const name = person.name;
        Those two variables right above are same as below(const {id, name} = person;)
        */
        const { id, name } = person;
        return (
          <div key={id} className="item">
            <h4>{name}</h4>
            <button onClick={() => removeItem(id)}>Remove</button>
          </div>
        );
      })}
      <button className="btn" onClick={() => setPeople([])}>
        Clear All
      </button>
    </React.Fragment>
  );
};

export default UseStateArray;
// If we invoke setPeople() directly, error pops out.
