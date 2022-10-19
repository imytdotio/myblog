import React from "react";

/**
 * @author
 * @function BlogPostSnippet
 **/

const BlogPostSnippet = (props) => {
  const monthNames = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  return (
    <div className="grid grid-cols-6 bg-white rounded-xl shadow-xl m-2 p-4 py-6">
      <div className="col-span-1">
        <p className="text-4xl font-black">
          {new Date(props.date.seconds).getDate()}
        </p>
        <p className="text-xl">
          {monthNames[new Date(props.date.seconds).getMonth()]}
        </p>
      </div>
      <div className="col-span-5 text-left">
        <h1 className="text-xl font-black mb-4">{props.title}</h1>
        <p>{props.content.substring(0, 100)}...</p>
      </div>
    </div>
  );
};
export default BlogPostSnippet;
