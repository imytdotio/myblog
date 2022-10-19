import React from "react";

/**
 * @author
 * @function Pill
 **/

const Pill = (props) => {
  return (
    <div className="border inline-block px-2 mx-1 my-1 rounded-full border-gray-400">
      {props.children}
    </div>
  );
};
export default Pill;
