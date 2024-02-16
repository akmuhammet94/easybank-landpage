import React from "react";
import "./Header.css";
import Button from "../Button/Button";

const Header = () => {
  return (
    <div className="container flex flex-row flex-wrap header justify-content-between">
      <div className="item">
        <h3>Next generation digital banking</h3>
        <p>
          Take your financial online. Your Easybanking account will be a
          one-stop-shop for spending, saving, budgeting, investing, and much
          more.
        </p>
        <Button title="Request invite" />
      </div>

      <div className="image">
        <img
          src="easy-banking/images/image-mockups.png"
          alt="digital-financial"
        />
      </div>
    </div>
  );
};

export default Header;
