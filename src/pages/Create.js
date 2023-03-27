import ContainerForm from "./ContainerForm"; // import the ContainerForm component
import Sidebar from "./Sidebar";
import Top from "./Top";
import Back from "./Back";
import React, { useState, useEffect } from "react";

import side from "@/styles/Sidebar.module.css";
import styles from "@/styles/Create.module.css";

const Create = () => {
  return (
    <div className={styles.form_body}>
      <h1 className={side.create}>Creating Post</h1>
      <Top />
      <ContainerForm />
      <Sidebar />
      <Back />
    </div>
  );
};

export default Create;
