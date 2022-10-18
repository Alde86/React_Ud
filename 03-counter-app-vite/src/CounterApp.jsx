import React from "react";
import { useState } from "react";
import PropTypes from "prop-types";

export const CounterApp = ({ value }) => {
  const [counter, setCounter] = useState(value);

  const handleAdd = () => {
    // console.log('+1')
    // value = 1000;
    setCounter(counter + 1);
    // setCounter( (c)) => c+1
  };

  const handleSubstract = () => setCounter(counter - 1);
  const handleReset = () => setCounter(value);
  return (
    <>
      <h1>CounterApp</h1>
      <h2> {value} </h2>

      <button onclick={handleAdd}>+1</button>
      <button onclick={handleSubstract}>-1</button>
      <button onclick={handleReset}>Reset</button>
    </>
  );
};

CounterApp.PropTypes = {
  value: PropTypes.number.isRequired,
};
