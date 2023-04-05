import React, { useEffect, useState } from "react";
import styles from "@/styles/Single_page.module.css";
import { useParams } from "react-router-dom";

import Navbar from "./Navbar";
import Back from "./Back";

const Single_page = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    console.log("Fetching blog details...");
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((response) => response.json())
      .then((data) => {
        console.log("Fetched blog details:", data);
        setBlog(data);
      })
      .catch((error) => console.log(error));
  }, [id]);

  if (!blog) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Navbar />
      <div className={styles.back}>
        <img src="./back.png" alt="back" />
      </div>
      <div className={styles.container}>
        <img
          src="/cover1.png"
          alt="Blog image" /* width="100%" height="auto"  */
        />
        <h3>{blog.title}</h3>
        <h5>{blog.date}</h5>
        <p>{blog.body}</p>
      </div>
    </>
  );
};

export default Single_page;
