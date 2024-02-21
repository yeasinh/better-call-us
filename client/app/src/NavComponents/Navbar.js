import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

const Navbar = () => {
  return (
    <>
      <nav className="main-nav">
        <div className="logo">
          <h2>
            <a href="/">
              <span className="letter1">B</span>etter
              <span className="letter2">C</span>all
              <span className="letter3">U</span>s
            </a>
          </h2>
        </div>

        <div className="menu-link">
          <ul>
            <li>
              <a href="/register">Register</a>
            </li>
            <li>
              <a href="/login">Login</a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
