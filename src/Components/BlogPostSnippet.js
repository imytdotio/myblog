import React from "react";

/**
 * @author
 * @function BlogPostSnippet
 **/

const BlogPostSnippet = (props) => {
  return (
    <div className="grid">
      <div className="grid-cols-1">
        <h1>{props.date}</h1>
      </div>
      <div className="grid-cols-5">
        <h1>{props.title}</h1>
        <p>{props.content.substring(200)}</p>
      </div>
    </div>
  );
};
export default BlogPostSnippet;
