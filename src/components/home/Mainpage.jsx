import React, { useState } from "react";
import { Route } from "react-router-dom";
import Home from "./Home";

function Form() {
  const [activeTab, setActiveTab] = useState("signup");

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
  };

  const handleInputChange = (e) => {
    const input = e.target;
    const label = input.previousSibling;

    if (e.type === "keyup") {
      if (input.value === "") {
        label.classList.remove("active", "highlight");
      } else {
        label.classList.add("active", "highlight");
      }
    } else if (e.type === "blur") {
      if (input.value === "") {
        label.classList.remove("active", "highlight");
      } else {
        label.classList.remove("highlight");
      }
    } else if (e.type === "focus") {
      if (input.value === "") {
        label.classList.remove("highlight");
      } else {
        label.classList.add("highlight");
      }
    }
  };

  return (
    <div className="form">
      <ul className="tab-group">
        <li className={`tab ${activeTab === "signup" ? "active" : ""}`}>
          <a href="#signup" onClick={() => handleTabClick("signup")}>
            Sign Up
          </a>
        </li>
        <li className={`tab ${activeTab === "login" ? "active" : ""}`}>
          <a href="#login" onClick={() => handleTabClick("login")}>
            Log In
          </a>
        </li>
      </ul>

      <div className="tab-content">
        <div
          id="signup"
          style={{ display: activeTab === "signup" ? "block" : "none" }}
        >
          <h1>Sign Up for Free</h1>

          <form action="/" method="post">
            <div className="top-row">
              <div className="field-wrap">
                <label>
                  First Name<span className="req">*</span>
                </label>
                <input
                  type="text"
                  required
                  autoComplete="off"
                  onChange={handleInputChange}
                />
              </div>

              <div className="field-wrap">
                <label>
                  Last Name<span className="req">*</span>
                </label>
                <input
                  type="text"
                  required
                  autoComplete="off"
                  onChange={handleInputChange}
                />
              </div>
            </div>

            <div className="field-wrap">
              <label>
                Email Address<span className="req">*</span>
              </label>
              <input
                type="email"
                required
                autoComplete="off"
                onChange={handleInputChange}
              />
            </div>

            <div className="field-wrap">
              <label>
                Set A Password<span className="req">*</span>
              </label>
              <input
                type="password"
                required
                autoComplete="off"
                onChange={handleInputChange}
              />
            </div>

            <button type="submit" className="button button-block">
              Get Started
            </button>
          </form>
        </div>

        <div
          id="login"
          style={{ display: activeTab === "login" ? "block" : "none" }}
        >
          <h1>Welcome Back!</h1>

          <form action="/" method="post">
            <div className="field-wrap">
              <label>
                Email Address<span className="req">*</span>
              </label>
              <input
                type="email"
                required
                autoComplete="off"
                onChange={handleInputChange}
              />
            </div>

            <div className="field-wrap">
              <label>
                Password<span className="req">*</span>
              </label>
              <input
                type="password"
                required
                autoComplete="off"
                onChange={handleInputChange}
              />
            </div>

            <p className="forgot">
              <a href="#">Forgot Password?</a>
            </p>

            <a href="/Home" className="button button-block">
              Log In
            </a>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Form;
