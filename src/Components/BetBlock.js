import React from "react";

/**
 * @author
 * @function BetBlock
 **/

export const BetBlock = (props) => {
  return (
    <div className="glass">
      <h1>{props.title}</h1>
      <h1>{props.desc}</h1>
    </div>
  );
};
