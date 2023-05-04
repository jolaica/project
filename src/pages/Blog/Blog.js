import React, { useState, useEffect, useCallback } from "react";
import styles from "@/styles/Blog.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const Blog = () => {
  const [searchInput, setSearchInput] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };

  const handleSearch = useCallback(() => {
    if (searchInput.trim() === "") {
      setSearchResults([]);
      return;
    }

    const queryParams = `?q=${encodeURIComponent(
      searchInput
    )}&published=true&is_deleted=false`;

    fetch(`http://192.168.1.2:8000/api/blog/search/${queryParams}`)
      .then((response) => response.json())
      .then((data) => {
        const filteredResults = data.results.filter((result) =>
          result.title.toLowerCase().includes(searchInput.toLowerCase())
        );

        const orderedResults = [
          ...filteredResults,
          ...data.results.filter(
            (result) =>
              !result.title.toLowerCase().includes(searchInput.toLowerCase())
          ),
        ];

        setSearchResults(orderedResults);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [searchInput]);

  const handleInputChange = (event) => {
    setSearchInput(event.target.value);
    setSearchResults([]);
  };

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
        <input
          type="text"
          placeholder="Search"
          name="searchInput"
          value={searchInput}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown} // Use the handleKeyDown function here
        />
        <button className={styles.searchIcon} onClick={handleSearch}>
          <FontAwesomeIcon icon={faSearch} color="black" />
        </button>
      </div>

      <div className={styles.container}>
        {searchInput.trim() !== "" &&
          searchResults.map((result) => (
            <div key={result.id} className={styles.item}>
              <img src={result.image} alt={result.title} />
              <p className={styles.blog_text}>Blog</p>
              <p>{result.title}</p>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Blog;
