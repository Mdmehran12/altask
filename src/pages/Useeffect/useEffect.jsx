import React from "react";

const UseEffect1 = () => {
  return (
    <div>
      <h1 className="altask-main-heading">useEffect </h1>
      <h2 className="altask-sub-heading">
        The useEffect hook in React is used to perform side effects in
        functional components. Side effects can include data fetching,
        subscriptions, or manually changing the DOM. It is similar to lifecycle
        methods in class components.
      </h2>

      <br />
      <h2 className="altask-subss-heading">
        useEffect hook is used to fetch data from an API after the component has
        rendered. The second argument (dependency array) is empty, meaning the
        effect runs only once after the initial render. If you have
        dependencies, you should include them in the dependency array to re-run
        the effect when those dependencies change.
      </h2>
    </div>
  );
};

export default UseEffect1;
