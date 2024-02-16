import React from "react";
import "./Section.css";

const sectionData = [
  {
    id: 1,
    icon: "easy-banking/images/icon-online.svg",
    title: "Online banking",
    text: "Our modern web and mobile applications allow you to keep track of your finances wherever you are in the world",
  },
  {
    id: 2,
    icon: "easy-banking/images/icon-budgeting.svg",
    title: "Simple Budgeting",
    text: "Our modern web and mobile applications allow you to keep track of your finances wherever you are in the world",
  },
  {
    id: 3,
    icon: "easy-banking/images/icon-onboarding.svg",
    title: "Fast Onboarding",
    text: "Our modern web and mobile applications allow you to keep track of your finances wherever you are in the world",
  },
  {
    id: 4,
    icon: "easy-banking/images/icon-api.svg",
    title: "Open Api",
    text: "Our modern web and mobile applications allow you to keep track of your finances wherever you are in the world",
  },
];

const Section = () => {
  return (
    <div className="section">
      <h3>Why choose EasyBanking</h3>
      <p>
        Take your financial online. Your Easybanking account will be a
        one-stop-shop for spending, <br />
        saving, budgeting, investing, and much more.
      </p>
      <div className="flex flex-row flex-wrap section-items">
        {sectionData.map((item, index) => (
          <div key={index} className="section-item">
            <img src={item.icon} alt="" />
            <h3>{item.title}</h3>
            <p>{item.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Section;
