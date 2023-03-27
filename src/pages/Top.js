import React from "react";
import styles from "@/styles/Top.module.css";
import { useState } from "react";

const Top = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        width: "1550px",
        height: "70px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "10px 20px",
        filter: "drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))",
        backgroundColor: "white",
        zIndex: 999, // Add this line to set the z-index
      }}
    >
      <div className={styles.menu}>
        <a>TOUR</a>
        <a className={styles.spot}>SPOT</a>
      </div>
      <div className={styles.dropdown}>
        <button onClick={toggleMenu} className={styles.dropbtn}>
          Admin &#x25BC;
        </button>
        {isOpen && (
          <div className={styles.dropdownContent}>
            <a href="./Admin">Profile</a>

            <a>Logout</a>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Top;
