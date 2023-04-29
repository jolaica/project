import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const BlogPost = () => {
  const { id } = useParams();
  const [blogPost, setBlogPost] = useState({});

  useEffect(() => {
    fetch(`http://192.168.1.7:8000/api/blog/${id}`)
      .then((response) => response.json())
      .then((data) => setBlogPost(data))
      .catch((error) => console.log(error));
  }, [id]);

  return (
    <div>
      <h1>{blogPost.title}</h1>
      <p>{blogPost.description}</p>
    </div>
  );
};

export default BlogPost;
