import React from "react";
import "./Navbar.css";
import navlogo from "../../assets/nav-logo.svg";
import navProfile from "../../assets/nav-profile.svg";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <Link to={"/"} style={{ textDecoration: "none" }}>
        <img src={navlogo} alt="" className="" />
      </Link>
      <img src={navProfile} className="nav-profile" alt="" />
    </div>
  );
};

export default Navbar;
