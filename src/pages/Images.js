import React, { useEffect, useState } from "react";
import styles from "@/styles/Blog.module.css";

const Images = () => {
  const [blogData, setBlogData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(8);
  const [expanded, setExpanded] = useState([]);

  useEffect(() => {
    console.log("Fetching blog data...");
    fetch(
      "https://5d31-2001-4455-16a-4a00-3022-e484-e8b8-a625.ap.ngrok.io/api/blog/"
    )
      .then((response) => response.json())
      .then((data) => {
        console.log("Fetched blog data:", data);
        setBlogData(data);
      })
      .catch((error) => console.log(error));
  }, []);

  // Calculate the index of the first and last items to show on the current page
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = blogData.slice(indexOfFirstItem, indexOfLastItem);

  // Calculate the total number of pages
  const totalPages = Math.ceil(blogData.length / itemsPerPage);

  // Generate an array of paging numbers to display
  const pageNumbers = [];
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  // Handle click events on the paging numbers
  const handleClick = (event) => {
    console.log("Clicked page:", Number(event.target.id));
    setCurrentPage(Number(event.target.id));
  };

  // Handle click events on the "Read More" button
  const handleExpand = (id) => {
    setExpanded([...expanded, id]);
  };

  return (
    <div className={styles.container}>
      {currentItems.map((blog) => (
        <div className={styles.blog_box} key={blog.id}>
          <div className="blog_item">
            <img
              src="/cover1.png"
              alt="Blog image"
              width="100%"
              height="auto"
            />
            <p className={styles.blog_text}>Blog</p>
            <h3>{blog.title}</h3>
            <p>
              {blog.body.length > 150 && !expanded.includes(blog.id)
                ? blog.body.slice(0, 100) + "..."
                : blog.body}
            </p>
            {blog.body.length > 150 && !expanded.includes(blog.id) && (
              <button
                onClick={() => handleExpand(blog.id)}
                className={styles.expand_button}
              >
                Continue reading
              </button>
            )}
          </div>
        </div>
      ))}
      <div className={styles.paging_body}>
        <div className={styles.paging}>
          {pageNumbers.map((number) => (
            <div
              key={number}
              id={number}
              className={currentPage === number ? "active" : ""}
              onClick={handleClick}
            >
              {number}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Images;
