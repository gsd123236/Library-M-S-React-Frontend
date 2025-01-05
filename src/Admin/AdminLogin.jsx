import { Grid } from "@mui/material";
import React, { useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import bgimg from "../Img/teacherB.jpg";


const AdminLogin = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  // const handleLogin = (e) => {
  //   e.preventDefault();

  //   const adminUsername = "admin";
  //   const adminPassword = "admin123";

  //   if (username === adminUsername && password === adminPassword) {
  //     setIsLoggedIn(true);
  //     setError("");
  //   } else {
  //     setError("Invalid username or password");
  //   }
  // };

 
  const handleLogin = (e) => {
    e.preventDefault();

    const adminUsername = "admin";
    const adminPassword = "admin123";

    if (!username || !password) {
      setError("Please enter both username and password");
      return;
    }

    if (username === adminUsername && password === adminPassword) {
      setIsLoggedIn(true);
      setError("");
      navigate("/Admin"); // Navigate to the home page
    } else {
      setError("Invalid username or password. Please try again.");
    }
  };

  return (
    <>
    
      <Grid container>
        <Grid
          item
          xs={12}
          sm={12}
          md={12}
          lg={12}
          style={{
            backgroundImage: `url(${bgimg})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            height: "711px",
            // height: "100%",

            // width: "80%",
            width: "auto",
          }}
        >
          <div style={styles.container}>
            {isLoggedIn ? (
              <h1>Welcome, Admin!</h1>
            ) : (
              <form style={styles.form} onSubmit={handleLogin}>
                <h2>Admin Login</h2>
                {error && <p style={styles.error}>{error}</p>}
                <div style={styles.inputGroup}>
                  <label htmlFor="username">Username</label>
                  <input
                    type="text"
                    id="username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    style={styles.input}
                  />
                </div>
                <div style={styles.inputGroup}>
                  <label htmlFor="password">Password</label>
                  <input
                    type="password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    style={styles.input}
                  />
                </div>

                {/* <Link
                  to="/Admin"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  <button type="submit" style={styles.button}>
                    Login
                  </button>
                </Link> */}
                
                
                  <button type="submit" onClick={handleLogin} style={styles.button}>
                    Login
                  </button>
              </form>
            )}
          </div>
        </Grid>
      </Grid>
    </>
  );
};

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    backgroundColor: "#f4f4f9",
  },
  form: {
    background: "#fff",
    padding: "20px",
    borderRadius: "8px",
    boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
    width: "300px",
  },
  inputGroup: {
    marginBottom: "15px",
  },
  input: {
    width: "100%",
    padding: "10px",
    marginTop: "5px",
    borderRadius: "4px",
    border: "1px solid #ccc",
  },
  button: {
    width: "100%",
    padding: "10px",
    backgroundColor: "#007bff",
    color: "#fff",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
  },
  error: {
    color: "red",
    marginBottom: "10px",
  },
};

export default AdminLogin;
