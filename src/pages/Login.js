import React from "react";
import styles from "@/styles/Login.module.css";
import { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage1, setErrorMessage1] = useState("");
  const [errorMessage2, setErrorMessage2] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isEmailActive, setIsEmailActive] = useState(false);
  const [isPasswordActive, setIsPasswordActive] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");

  const handleEmailBlur = (event) => {
    const inputEmail = event.target.value;
    if (inputEmail !== "" && !validateEmail(inputEmail)) {
      setErrorMessage1("Please enter a valid email address.");
    } else {
      setErrorMessage1(
        inputEmail === "" ? "This field is required an email." : ""
      );
    }
    setIsEmailActive(false); // add this line to set isEmailActive to false
  };

  const handlePasswordBlur = (event) => {
    const inputPassword = event.target.value;
    if (inputPassword.trim() === "") {
      setErrorMessage2("This field required a password.");
    } else {
      setErrorMessage2("");
    }
    setIsPasswordActive(false); // add this line to set isPasswordActive to false
  };

  const validateEmail = (email) => {
    // Regular expression to validate email address
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleEmailChange = (event) => {
    const inputEmail = event.target.value;
    setEmail(inputEmail);
    if (inputEmail !== "" && !validateEmail(inputEmail)) {
      setErrorMessage1("Please enter a valid email address.");
    } else {
      setErrorMessage1("");
    }
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
    setErrorMessage2("");
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Validates both input values
    if (email.trim() === "" && password.trim() === "") {
      setErrorMessage1("This field required an email.");
      setErrorMessage2("This field required a password.");
    }
    // Perform validation on the input values

    if (email.trim() === "") {
      setErrorMessage1("This field required an email.");
      return;
    } else if (!validateEmail(email)) {
      setErrorMessage1("Please enter a valid email address.");
      return;
    } else {
      setErrorMessage1("");
    }

    if (password.trim() === "") {
      setErrorMessage2("This field required a password.");
      return;
    } else {
      setErrorMessage2("");
    }

    // Store user details in sessionStorage
    const userDetails = {
      email: email,
      password: password,
      date: new Date(),
    };
    sessionStorage.setItem("userDetails", JSON.stringify(userDetails));

    // set the alert message
    setAlertMessage("Login successful!");

    // Clear the form fields and error message
    setEmail("");
    setPassword("");
    setErrorMessage1("");
    setErrorMessage2("");

    // Redirect to dashboard
    window.location.href = "/Empty";
  };

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className={styles.container}>
      <div className={styles.formContainer}>
        <form className={styles.loginForm} onSubmit={handleSubmit}>
          {alertMessage && <div className={styles.alert}>{alertMessage}</div>}
          <h1>Login</h1>
          <div className={styles.emailContainer}>
            <div>
              <label htmlFor="email" className={styles.label}>
                Email Address
              </label>
            </div>
            <input
              type="text"
              id="email"
              placeholder="Email Address"
              value={email}
              onChange={handleEmailChange}
              onBlur={handleEmailBlur}
              onFocus={() => {
                setIsEmailActive(true);
              }}
              className={`${styles.input1} ${errorMessage1 && styles.error} ${
                isEmailActive ? styles.active : ""
              }`}
            />
            {errorMessage1 && (
              <div className={styles.errorMessage1}>{errorMessage1}</div>
            )}
          </div>
          <div className={styles.pswdContainer}>
            <div>
              <label htmlFor="password" className={styles.label}>
                Password
              </label>
            </div>
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              placeholder="Password"
              value={password}
              onChange={handlePasswordChange}
              onBlur={handlePasswordBlur}
              onFocus={() => {
                setIsPasswordActive(true);
              }}
              className={`${styles.input2} ${errorMessage2 && styles.error} ${
                isPasswordActive ? styles.active : ""
              }`}
            />
            <button
              type="button"
              onClick={toggleShowPassword}
              className={styles.showPasswordButton}
            >
              {showPassword ? "HIDE" : "SHOW"}
            </button>
            {errorMessage2 && (
              <div className={styles.errorMessage2}>{errorMessage2}</div>
            )}
          </div>
          <button type="submit" className={styles.button}>
            Log in
          </button>
        </form>
      </div>
      <div className={styles.imgContainer}>
        <div className={styles.imgBg} />
      </div>
    </div>
  );
};

export default Login;
