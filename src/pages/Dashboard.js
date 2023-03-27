import React, { useState, useEffect } from "react";
import styles from "@/styles/Dashboard.module.css";
import Navbar from "./Navbar";
import Blog from "./Blog";
import Images from "./Images";

import Footer from "./Footer";

const Dashboard = () => {
  const [userDetails, setUserDetails] = useState(null);

  useEffect(() => {
    const storedUserDetails = sessionStorage.getItem("userDetails");

    if (storedUserDetails) {
      setUserDetails(JSON.parse(storedUserDetails));
    }
  }, []);

  const handleLogout = () => {
    sessionStorage.removeItem("userDetails");
    setUserDetails(null);
  };

  const getUsername = (email) => {
    return email.split("@")[0];
  };

  return (
    <>
      <Navbar />
      <Blog />
      <Images />
      <Footer />

      <div className={styles.dashboard_container}>
        {userDetails ? (
          <div className={styles.dashboard_content}>
            <h1 className={styles.dashboard_welcome}>
              Welcome, {getUsername(userDetails.email)}!
            </h1>
            <button onClick={handleLogout}>Logout</button>
          </div>
        ) : (
          <p>Loading user details...</p>
        )}
      </div>
    </>
  );
};

export default Dashboard;
