import React from "react";
import side from "@/styles/Sidebar.module.css";

const Sidebar = () => {
  return (
    <div className={side.sidebar}>
      <button className={side.all_btn}>
        <a href="./All_post"> Published</a>
      </button>
      <button className={side.draft_btn}>
        <a href="/Draft">Drafts</a>
      </button>
      <button className={side.delete_btn}>
        <a href="./Deleted">Deleted </a>
      </button>
    </div>
  );
};

export default Sidebar;
