import React, { useState } from "react";

const UseState = () => {
  const [add, setAdd] = useState(0);

  const handleAdd = () => {
    setAdd(add + 1);
  };

  const handleLess = () => {
    setAdd(add - 1);
  };

  return (
    <div>
      <h1 className="altask-main-heading">UseState</h1>
      <h2 className="altask-sub-heading">
        useState is a React hook that allows functional components to manage and
        update state. It returns an array with two elements: the current state
        value and a function to update that value.
      </h2><br />

      <h2 className="altask-sub-heading">In React, the useState hook is a function that enables functional components to manage state. It takes an initial state value as an argument and returns an array containing two elements:</h2>
    <h2 className="altask-subss-heading">1. State Variable (state): This variable holds the current state value. You can read from and write to this variable to manage the state.</h2>
    <h2 className="altask-subss-heading">2. State Updater Function (setState): This function allows you to update the state variable. When called, it triggers a re-render of the component with the updated state.</h2>
      <h3>{add}</h3>
      <div style={{display:"flex", gap:"10px"}}>
      <button onClick={handleAdd} className="altask-black-btn">
        Add
      </button>
      <br />
      <button onClick={handleLess} className="altask-black-btn">
        Less
      </button>
      </div>
    </div>
  );
};

export default UseState;
