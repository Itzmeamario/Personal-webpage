import React from "react";

export default () => {
  return (
    <div>
      <div>I'm the home component</div>
      <button onClick={() => console.log("They pressed me!")}>Press me!</button>
    </div>
  );
};
