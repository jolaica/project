import React, { useEffect, useState } from "react";
import Link from "next/link";
import styles from "@/styles/Images.module.css";

const Images = () => {
  const [blogData, setBlogData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalCount, setTotalCount] = useState(0);
  const [searchQuery, setSearchQuery] = useState(""); // Added searchQuery state
  const pageNumbers = [1, 2, 3, 4];
  const itemsPerPage = 8;

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(
          `/api/blog?page=${currentPage}&limit=${itemsPerPage}&offset=${
            (currentPage - 1) * itemsPerPage
          }&q=${searchQuery}` // Include searchQuery in the API endpoint URL
        );
        if (!response.ok) {
          throw new Error("Failed to fetch blog data");
        }
        const data = await response.json();
        console.log("API response:", data);
        setBlogData(data.results);
        setTotalCount(data.totalCount);
      } catch (error) {
        console.error(error);
      }
    }
    fetchData();
  }, [currentPage, searchQuery]); // Update when currentPage or searchQuery changes

  const handleClick = (event) => {
    const clickedPage = parseInt(event.target.id);
    console.log("Clicked page:", clickedPage);
    setCurrentPage(clickedPage);
  };

  const totalPages = Math.ceil(totalCount / itemsPerPage);

  console.log("blogData:", blogData);
  console.log("currentPage:", currentPage);
  console.log("totalCount:", totalCount);

  const handleSearchInputChange = (event) => {
    setSearchQuery(event.target.value); // Update searchQuery state with input value
  };

  return (
    <div className={styles.container}>
      {blogData.map((item) => (
        <Link
          className={styles.item}
          href={`/BlogPost/${item.slug}`}
          passHref
          key={item.id}
        >
          <img src={item.image} alt={item.title} />
          <p className={styles.blog_text}>Blog</p>
          <h3>{item.title}</h3>
          <p>{item.description}</p>
        </Link>
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
