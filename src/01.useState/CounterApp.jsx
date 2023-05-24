import { useState } from "react";

export const CounterApp = () => {
  const [value, setValue] = useState({
    value1: 10,
    value2: 20,
    value3: 30,
  });

  const {value1,value2,value3}= value


  return (
    <>
      <h1>Counter App = {value1} </h1>
      <hr />
      <button
        className="btn btn-primary mb-2"
        onClick={() =>
          setValue({
            ...value,
            value1:value1+1
          })
        }
      >
        +1
      </button>
      <br />
      <h2>valor1: {value1}</h2>
      <h2>valor2: {value2}</h2>
      <h2>valor3: {value3}</h2>
    </>
  );
};
