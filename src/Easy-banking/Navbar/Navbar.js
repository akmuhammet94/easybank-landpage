import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import Button from "../Button/Button";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [mobile, setMobile] = useState(false);
  const handleMobile = () => setMobile(!mobile);

  return (
    <div className="container flex flex-row items-center navbar justify-content-between">
      <Link to="/#">
        <img src="easy-banking/images/logo.svg" alt="logo" />
      </Link>
      <div className={mobile ? "links" : "links hide"}>
        <Link to="#" onClick={handleMobile}>Home</Link>
        <Link to="#">About</Link>
        <Link to="#">Contact</Link>
        <Link to="#">Blog</Link>
        <Link to="#">Careers</Link>
      </div>
      <Button title="Request invite" />
      <span className="hamburger" onClick={handleMobile}>
        {mobile ? <FaTimes /> : <FaBars />}
      </span>
    </div>
  );
};

export default Navbar;
