import React from "react";

/**
 * @author
 * @function ProjectBlock
 **/

export const ProjectBlock = (props) => {
  return (
    <div className="border border-gray-400 rounded-xl text-left pl-4 py-4 my-4">
      <h1 className='text-2xl font-bold pb-2'>{props.title}</h1>
      <p>{props.desc}</p>
    </div>
  );
};
