import React from "react";

/**
 * @author
 * @function Pill
 **/

const Pill = (props) => {
  return (
    <div className="border-2 inline-block px-4 mx-2 rounded-full border-gray-200">{props.children}</div>
  );
};
export default Pill;
