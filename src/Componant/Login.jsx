import { Card, Grid, Typography } from "@mui/material";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom"; // Import useNavigate
import bgimg from "../Img/LoginBg.jpg";
import "./Login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const navigate = useNavigate(); // Correctly using the hook inside the functional component

  const validate = () => {
    const errors = {};

    if (!email) {
      errors.email = "Email is required";
    } else if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)) {
      errors.email = "Enter a valid email address";
    }

    if (!password) {
      errors.password = "Password is required";
    } else if (password.length < 6) {
      errors.password = "Password must be at least 6 characters";
    }

    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // navigate("/Lab");

    if (validate()) {
      console.log("Form submitted", { email, password });
      navigate("/Lab");

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
            // height: "711px",
            // height: "100%",

            // width: "80%",
            width: "auto",
            height: "auto",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "100vh",
              width: "100vw",
            }}
          >
            <Card
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "60vh",
                width: "25%",
                borderRadius: "10px",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
                zIndex: 10,
                position: "relative",
                backgroundColor: "#f9f9f9",
                opacity: 0.9
              }}
            >
              <form className="login-form" onSubmit={handleSubmit}>
                <h2>Login</h2>

                <div className="form-group">
                  <label htmlFor="email">Email:</label>
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className={errors.email ? "error-input" : ""}
                  />
                  {errors.email && (
                    <p className="error-message">{errors.email}</p>
                  )}
                </div>

                <div className="form-group">
                  <label htmlFor="password">Password:</label>
                  <input
                    type="password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className={errors.password ? "error-input" : ""}
                  />
                  {errors.password && (
                    <p className="error-message">{errors.password}</p>
                  )}
                </div>

                <button type="submit" className="login-button">
                  Login
                </button>
                <Grid
                  container
                  spacing={2}
                  justifyContent="center"
                  alignItems="center"
                  direction="column"
                >
                  <Grid item xs={12} sm={6}>
                    <Typography variant="h6" align="center">
                      <Link
                        to="/Registration"
                        style={{ textDecoration: "none", color: "inherit" }}
                      >
                        Sign Up
                      </Link>
                    </Typography>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <Typography  align="center" >
                      <Link
                        to="/AdminLogin"
                        style={{ textDecoration: "none", color: "blue" }}
                      >
                        Admin Login
                      </Link>
                    </Typography>
                  </Grid>
                </Grid>
              </form>
            </Card>
          </div>
        </Grid>
      </Grid>
    </>
  );
};

export default Login;
