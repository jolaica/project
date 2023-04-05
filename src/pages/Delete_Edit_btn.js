import React, { useState } from "react";
import styles from "@/styles/Delete_Edit_btn.module.css";

const Delete_Edit_btn = () => {
  const [isEditing, setIsEditing] = useState(false);

  const handleEditClick = () => {
    // Logic for editing the content goes here
    setIsEditing(true);
  };

  const handleDeleteClick = () => {
    // Logic for deleting the content goes here
  };

  return (
    <div className={styles.action_btn}>
      {/* {isEditing ? (
        <div className={styles["save-cancel-buttons"]}>
          <button onClick={handleEditClick}>Save</button>
          <button onClick={() => setIsEditing(false)}>Cancel</button>
        </div>
      ) : ( */}
      <div className={styles["edit-delete-buttons"]}>
        <button onClick={handleEditClick}>
          <img src="/edit.png" alt="Edit" className={styles.icon} /> Edit
        </button>
        <button onClick={handleDeleteClick}>
          <img src="/delete.png" alt="Delete" className={styles.delete_icon} />
          Delete
        </button>
      </div>
      {/* )} */}
    </div>
  );
};

export default Delete_Edit_btn;
