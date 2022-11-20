import React from "react";
import { Link } from "react-router-dom";
import "../styles/Header.css";

const Header = () => {
  return (
    <nav>
      <h1>Refier</h1>
      <ul>
        <li>
          <Link to="/">Jobs</Link>
        </li>
        <li>
          <Link to="/post-job">Post a Job</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
