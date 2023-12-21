import React from "react";

const Map = () => {
  return (
    <div>
      <h1 className="altask-main-heading"> Higher-order functions </h1>
      <h2 className="altask-sub-heading">
        In JavaScript Higher-order functions operate on arrays and provide
        concise and powerful ways to manipulate and transform data.
      </h2>

      <h2 className="altask-sub-heading">Map</h2>
      <h2 className="altask-subss-heading">
        1. Used to transform each element in an array by applying a provided
        function to it.
      </h2>
      <h2 className="altask-subss-heading">
        2. Returns a new array with the same length as the original, where each
        element is the result of the provided function.
      </h2>

      <h2 className="altask-sub-heading">Filter</h2>
      <h2 className="altask-subss-heading">
        {" "}
        1. Creates a new array with elements that satisfy a given condition.
      </h2>
      <h2 className="altask-subss-heading">
        {" "}
        2. The provided function returns true or false for each element, and
        only elements that satisfy the condition are included in the new array.
      </h2>

      <h2 className="altask-sub-heading">Reduce</h2>
      <h2 className="altask-subss-heading">1. Reduces an array to a single value by applying a function to each element and accumulating the results.</h2>
      <h2 className="altask-subss-heading">2. Takes a callback function with an accumulator and the current element as arguments.
.</h2>
<br />
<h2 className="altask-sub-heading">These functions are essential for functional programming in JavaScript and are commonly used for data manipulation tasks. They provide a more declarative and concise way to express operations on arrays compared to traditional looping constructs.</h2>
    </div>
  );
};

export default Map;
