import React, { useState, useEffect } from "react";
import BlogPostSnippet from "../Components/BlogPostSnippet";
import { projectFirestore } from "../firebase/config";

/**
 * @author
 * @function Blog
 **/

const Blog = (props) => {
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState(false);
  const [data, setData] = useState(null);
  useEffect(() => {
    setIsPending(true);

    projectFirestore.collection("blog").onSnapshot((snapshot) => {
      let results = [];
      if (snapshot.empty) {
        setError("No data");
        setIsPending(false);
      } else {
        snapshot.docs.forEach((doc) => {
          results.push({
            id: doc.id,
            title: doc.data().title,
            content: doc.data().content,
            date: doc.data().date,
          });
        });
        setData(results);
        console.log(data);
        setIsPending(false);
      }
    });
  }, []);
  return (
    <div>
      {isPending && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {data &&
        data.map((blog) => {
          return (
            <BlogPostSnippet
              key={blog.id}
              date={blog.date}
              title={blog.title}
              content={blog.content}
            />
          );
        })}
    </div>
  );
};
export default Blog;
