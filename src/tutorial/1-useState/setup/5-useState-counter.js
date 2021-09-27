import React, { useState } from "react";

const UseStateCounter = () => {
  const [value, setValue] = useState(0);
  /*
  const decrease = () => {
    setValue(value - 1)
  }

  const increase = () => {
    setValue(value + 1)
  }
  */
  const reset = () => {
    setValue(0);
  };

  const complexIncrease = () => {
    setTimeout(() => {
      //setValue(value + 1);
      // Functional Update Form: useState is async.
      setValue((prevState) => {
        return prevState + 1;
      });
    }, 2000);
  };

  return (
    <React.Fragment>
      <section style={{ margin: "4rem 0" }}>
        <h2>regular counter</h2>
        <h1>{value}</h1>
        <button
          className="btn"
          onClick={() => {
            setValue(value - 1);
          }}
        >
          Decrease
        </button>
        <button className="btn" onClick={reset}>
          Reset
        </button>
        <button
          className="btn"
          onClick={() => {
            setValue(value + 1);
          }}
        >
          Increase
        </button>
      </section>

      <section style={{ margin: "4rem 0" }}>
        <h2>more complex counter</h2>
        <h1>{value}</h1>
        <button className="btn" onClick={complexIncrease}>
          increase later
        </button>
      </section>
    </React.Fragment>
  );
};

export default UseStateCounter;
