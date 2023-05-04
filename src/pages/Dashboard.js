import React, { useState, useEffect } from "react";
import styles from "@/styles/Dashboard.module.css";
import Navbar from "./Navbar";
import Blog from "././Blog/Blog";
import Images from "././Blog/index";

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
