import React from "react";
import { data } from "../data";
const UseStateData = () => {
  const clearItem = () => {
    setPeople([]);
    setNumber(0);
  };
  const [people, setPeople] = React.useState(data);
  const [number, setNumber] = React.useState(data.length);
  return (
    <React.Fragment className="container">
      <h3>{number} birthdays today</h3>
      <section>
        {people.map((person) => {
          const { id, name, years } = person;
          return (
            <div key={id} className="user">
              <h4>{name}</h4>
              <h5>{years}</h5>
            </div>
          );
        })}
      </section>
      <button className="button" onClick={() => clearItem()}>
        clear
      </button>
    </React.Fragment>
  );
};

export default UseStateData;
