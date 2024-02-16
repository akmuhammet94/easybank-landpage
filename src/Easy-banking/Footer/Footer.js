import React from "react";
import {
  FaFacebook,
  FaYoutube,
  FaTwitter,
  FaPinterest,
  FaInstagram,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import "./Footer.css";
import Button from "../Button/Button";

const Footer = () => {
  return (
    <div className="container flex flex-row footer justify-content-between">
      <div className="foot-item logo">
        <Link to="/">
          <img src="easy-banking/images/logo-white.svg" alt="" />
        </Link>
        <div className="flex flex-row social-links">
          <Link to="/">
            <FaFacebook />
          </Link>
          <Link to="/">
            <FaYoutube />
          </Link>
          <Link to="/">
            <FaTwitter />
          </Link>
          <Link to="/">
            <FaPinterest />
          </Link>
          <Link to="/">
            <FaInstagram />
          </Link>
        </div>
      </div>

      <div className="flex flex-row foot-item useful-links ">
        <div className="flex flex-col useful-social-links">
          <Link to="/">About us</Link>
          <Link to="/">Contact</Link>
          <Link to="/">Blog</Link>
        </div>
        <div className="flex flex-col useful-social-links">
          <Link to="/">Careers</Link>
          <Link to="/">Support</Link>
          <Link to="/">Privacy Policy</Link>
        </div>
      </div>

      <div className="flex flex-col items-end foot-item">
        <div>
          <Button title="Request invite" />
        </div>
        <p>&copy;Easybank. All rights reserved</p>
      </div>
    </div>
  );
};

export default Footer;
