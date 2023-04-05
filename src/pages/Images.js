import React, { useEffect, useState } from "react";
import styles from "@/styles/Blog.module.css";

const Images = () => {
  const [blogData, setBlogData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(8);

  // Fetch data from API and update state
  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        `http://10.0.254.23:8000/api/blog/?offset=${
          (currentPage - 1) * itemsPerPage
        }`
      );
      const data = await response.json();
      setBlogData(data.results);
    }
    fetchData();
  }, [currentPage, itemsPerPage]);

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
    setCurrentPage(Number(event.target.id));
  };

  return (
    <div>
      <div className={styles.container}>
        {currentItems.map((item) => (
          <div className={styles.item} key={item.id}>
            <img src={item.image} alt={item.title} />
            <p className={styles.blog_text}>Blog</p>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
      <div className={styles.paging_body}>
        <div className={styles.paging}>
          <div className={styles.paging_indicator}>
            {`Page ${currentPage} of ${totalPages}`}
          </div>
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
