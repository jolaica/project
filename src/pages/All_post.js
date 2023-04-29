import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

import Sidebar from "./Sidebar";
import Top from "./Top";
import Footer from "./Footer";

import styles from "@/styles/All_post.module.css";
import Delete_Edit_btn from "./Delete_Edit_btn";

const All_post = () => {
  // Set initial state values
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [items, setItems] = useState([
    // Replace this with your data
  ]);

  // Logic to calculate the number of pages
  const totalItems = items.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const pageNumberArray = [...Array(totalPages).keys()].map((i) => i + 1);

  // Logic to get the current page's items
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = items.slice(indexOfFirstItem, indexOfLastItem);

  return (
    <div /* className={styles.all_body} */>
      <h2 className={styles.all_title}>ALL PUBLISHED POST</h2>

      <Top />
      <Sidebar />
      <div className={styles.searchbar}>
        <input type="text" placeholder="Search" name="searchInput" />
        <button className={styles.searchIcon}>
          <FontAwesomeIcon icon={faSearch} color="black" />
        </button>
      </div>

      <button className={styles.category}>
        <a>Latest</a>
      </button>
      <button className={styles.create_btn}>
        <a className={styles.create_post}>Create Post</a>
      </button>

      <div className={styles.table_body}>
        <div className={styles.title_table}>
          <div className={styles.title}>TITLE</div>
        </div>
        <div className={styles.date_table}>
          <div className={styles.date}>DATE</div>
        </div>
        <div className={styles.action_table}>
          <div className={styles.restore}></div>
          <div className={styles.action}>ACTION</div>
          <Delete_Edit_btn />
        </div>

         <Footer />
      </div>

      {/* Render the current items */}
      {currentItems.map((item) => (
        <div className={styles.table_body}>
          <div className={styles.title_table}>
            <div className={styles.title}>{item.title}</div>
          </div>
          <div className={styles.date_table}>
            <div className={styles.date}>{item.date}</div>
          </div>
          <div className={styles.action_table}>
            <div className={styles.action}>ACTION </div>
          </div>
        </div>
      ))}

      {/* Render the pagination links */}
      <div className={styles.paging}>
        {pageNumberArray.map((pageNumber) => (
          <button
            key={pageNumber}
            onClick={() => setCurrentPage(pageNumber)}
            className={pageNumber === currentPage ? styles.active : ""}
          >
            {pageNumber}
          </button>
        ))}
      </div>
    </div>
  );
};

export default All_post;
