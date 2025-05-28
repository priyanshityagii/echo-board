import React, { useState, useEffect } from "react";
import axios from "axios";
import styles from "./Login.module.css";
import logo from "../assets/images/logo2.png";
import loginImage from "../assets/images/adminLogin2.png";
import messageIcon from "../assets/icons/envelope.svg";
import lockIcon from "../assets/icons/lock.svg";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Redirect if already logged in
 useEffect(() => {
  const token = localStorage.getItem("token");
  console.log("Token on load:", token); // 👈 Debug
  if (token) {
    navigate("/admin/dashboard");
  }
}, [navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();

  //   try {
  //     const res = await axios.post("http://localhost:5000/admin/login", {
  //       email,
  //       password,
  //     });

  //     if (res.data.status) {
  //       localStorage.setItem("token", res.data.token);
  //       window.location.href = "/admin/dashboard";
  //     } else {
  //       alert(res.data.message || "Login failed");
  //     }
  //   } catch (error) {
  //     alert("Server error. Please try again.");
  //     console.error(error);
  //   }
  // };
// Dummy credentials
const dummyAdmin = {
  email: "admin@example.com",
  password: "admin123",
};

// Simulated login check
if (email === dummyAdmin.email && password === dummyAdmin.password) {
  localStorage.setItem("token", "dummy-token");
  window.location.href = "/admin/dashboard";
} else {
  alert("Invalid credentials. Try 'admin@example.com' and 'admin123'");
}
  };

  
  return (
    <div className={styles.wrapper}>
      <div className={styles.logoContainer}>
        <img src={logo} alt="Logo" className={styles.logo} />
      </div>

      {/* Left side - form */}
      <div className={styles.formSection}>
        <div className={styles.curve}></div>
        <div className={styles.formContainer}>
          <h2 className={styles.title}>Admin Login</h2>

          <div className={styles.inputGroup}>
            <img src={messageIcon} alt="Email Icon" className={styles.icon} />
            <input
              type="email"
              placeholder="Email"
              className={styles.input}
              aria-label="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className={styles.inputGroup}>
            <img src={lockIcon} alt="Password Icon" className={styles.icon} />
            <input
              type="password"
              placeholder="Password"
              className={styles.input}
              aria-label="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div className={styles.forgot}>
            <a href="#">Forgot your password?</a>
          </div>

          <div className={styles.buttonContainer}>
            <button type="submit" className={styles.button} onClick={handleSubmit}>
              Sign in
            </button>
          </div>
        </div>
      </div>

      {/* Right side - image */}
      <div className={styles.imageSection}>
        <img src={loginImage} alt="Login Visual" className={styles.loginImage} />
      </div>
    </div>
  );
}
