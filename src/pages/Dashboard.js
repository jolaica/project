import React, { useState, useEffect } from "react";
import styles from "@/styles/Dashboard.module.css";
import Navbar from "./Navbar";
import Blog from "./Blog";
import Images from "./Images";

import Footer from "./Footer";

const Dashboard = () => {
  return (
    <>
      <Navbar />
      <Blog />
      <Images />
      <Footer />
    </>
  );
};

export default Dashboard;
