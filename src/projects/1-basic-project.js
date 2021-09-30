import React from "react";
import { data } from "../data";
const UseStateData = () => {
  const [people, setPeople] = React.useState(data);
  return (
    <React.Fragment>
      {people.map((person) => {
        const { id, name, years } = person;
        return (
          <div key={id} className="item">
            <h4>{name}</h4>
            <h5>{years}</h5>
          </div>
        );
      })}
      <button className="btn" onClick={() => setPeople([])}>
        clear items
      </button>
    </React.Fragment>
  );
};

export default UseStateData;
