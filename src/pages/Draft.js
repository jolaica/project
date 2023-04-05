import React, { useState, useEffect } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

import Sidebar from "./Sidebar";
import Top from "./Top";
import Footer from "./Footer";

import styles from "@/styles/Draft.module.css";
import Delete_Edit_btn from "./Delete_Edit_btn";

const Draft = () => {
  return (
    <div /*  className={styles.all_body} */>
      <h2 className={styles.all_title}>DRAFT POST</h2>

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
        {/* <Footer /> */}
      </div>
    </div>
  );
};

export default Draft;
