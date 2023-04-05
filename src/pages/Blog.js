import { useState, useEffect } from "react";
import styles from "@/styles/Blog.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const Blog = () => {
  return (
    <div
      className={styles.blog}
      style={{
        color: "Black",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        padding: "90px 20px",
        marginBottom: "10px 10px",
        fontFamily: "Montserrat, sans-serif",
      }}
    >
      <div className={styles.center}>
        <h1 className={styles.title}>
          <span className={styles.mountain}>OUR</span>{" "}
          <span className={styles.highlightedCom}>BLOG </span>
        </h1>
        <p className={styles.paragraph}>
          Exploring the Best of the Philippines
          <br />
          <p className={styles.br}></p>
        </p>
      </div>

      <div className={styles.searchBox}>
        <input type="text" placeholder="Search" name="searchInput" />
        <button className={styles.searchIcon}>
          <FontAwesomeIcon icon={faSearch} color="black" />
        </button>
      </div>
    </div>
  );
};

export default Blog;
