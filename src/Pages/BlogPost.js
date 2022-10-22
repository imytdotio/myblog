import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { projectFirestore } from "../firebase/config";

/**
 * @author
 * @function BlogPost
 **/

const BlogPost = (props) => {
  const params = useParams();
  const [data, setData] = useState(null);
  const [date, setDate] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    setIsPending(true);
    projectFirestore
      .collection("blog")
      .doc(params.id)
      .onSnapshot(
        (doc) => {
          if (doc.exists) {
            setData(doc.data());
            setDate(doc.data().date.seconds * 1000);
            setIsPending(false);
          } else {
            setError("No data");
            setIsPending(false);
          }
        },
        (err) => {
          setError(err);
          setIsPending(false);
        }
      );
  }, []);

  return (
    <div>
      {isPending && <p>Loading</p>}
      {error && <p>{error}</p>}
      {data && (
        <div className="text-left">
          <h1 className="font-bold text-4xl my-2">{data.title}</h1>
          <p className="text-gray-800 italic my-2">
            {new Date(date).toLocaleDateString()}
          </p>
          <p>{data.content}</p>
        </div>
      )}
    </div>
  );
};
export default BlogPost;
