import React, { useState } from "react";
import "./login.css";

const Login = ({ setIsAuthenticated }) => {
  const [form, setForm] = useState({ username: "", password: "" });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setError("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (form.username === "admin" && form.password === "admin") {
      setIsAuthenticated(true);
    } else {
      setError("Invalid username or password");
    }
  };

  return (
    <div className="login-page">
      <div className="login-image-side"></div>
      <div className="login-form-side">
        <form className="login-form" onSubmit={handleSubmit}>
          <div className="login-header">
            <h2>NYXEN Login</h2>
            <div style={{ height: "20px" }}></div>
          </div>
          <div className="form-group">
            <label>Username</label>
            <div style={{ height: "4px" }}></div>
            <input
              name="username"
              value={form.username}
              onChange={handleChange}
              autoComplete="username"
              required
            />
            <div style={{ height: "4px" }}></div>
            <label>Password</label>
            <div style={{ height: "4px" }}></div>
            <input
              type="password"
              name="password"
              value={form.password}
              onChange={handleChange}
              autoComplete="current-password"
              required
            />
            {error && <div className="login-error">{error}</div>}
            <button className="login-btn" type="submit">
              Login
            </button>
            <div className="login-options">
              <button
                type="button"
                className="secondary-btn"
                onClick={() => alert("Forgot password flow here")}
              >
                Forgot Password?
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;