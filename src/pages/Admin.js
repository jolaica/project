import React, { useState } from "react";
import styles from "@/styles/Admin.module.css";
import Sidebar from "./Sidebar";
import Top from "./Top";

const ChangePassword = ({ email }) => {
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Verify that new password and confirmation match
    if (newPassword !== confirmPassword) {
      setErrorMessage("Passwords do not match");
      return;
    }

    // TODO: Implement password change functionality

    // Clear form inputs and display success message
    setOldPassword("");
    setNewPassword("");
    setConfirmPassword("");
    setErrorMessage("Password changed successfully");
  };

  return (
    <div className={styles.admin_body}>
      <div className={styles.back}>
        <img src="./back.png" alt="back" />
      </div>
      <h1 className={styles.my_profile}>My Profile</h1>
      <form onSubmit={handleSubmit} className={styles.form}>
        <h4 className={styles.personal_info}> Personal Information</h4>
        <label>
          Email {email}
          <input
            type="email"
            value={email}
            placeholder="Email Address"
            className={styles.input} // add the class name for the input element
          />
        </label>
        <br />
        <label>
          New Password:
          <input
            type="password"
            placeholder="New Password"
            value={newPassword}
            onChange={(event) => setNewPassword(event.target.value)}
            className={styles.input} // add the class name for the input element
          />
        </label>
        <br />
        <label>
          Confirm Password:
          <input
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(event) => setConfirmPassword(event.target.value)}
            className={styles.input} // add the class name for the input element
          />
        </label>
        <br />
        <button type="submit" className={styles.cancel_btn}>
          Cancel
        </button>

        <button type="submit" className={styles.change_btn}>
          Save Changes
        </button>
      </form>
      {errorMessage && <p>{errorMessage}</p>}
    </div>
  );
};

const Admin = ({ email }) => {
  return (
    <div>
      <Top />
      <Sidebar />
      <ChangePassword email={email} />
    </div>
  );
};

export default Admin;
