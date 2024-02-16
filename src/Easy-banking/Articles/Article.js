import React from "react";
import "./Article.css";

const articlesData = [
  {
    id: 1,
    image: "easy-banking/images/image-currency.jpg",
    author: "Claire Robinson",
    title: "Receive money in any currency with no fees",
    text: "Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.",
  },
  {
    id: 2,
    image: "easy-banking/images/image-restaurant.jpg",
    author: "Wilson Hutton",
    title: "Treat yourself without worrying about money",
    text: "Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.",
  },
  {
    id: 3,
    image: "easy-banking/images/image-plane.jpg",
    author: "Wilson Hutton",
    title: "Take your Easybank card wherever you go",
    text: "Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.",
  },
  {
    id: 4,
    image: "easy-banking/images/image-confetti.jpg",
    author: "Claire Robinson",
    title: "Our invite-only Beta accounts are now live!",
    text: "Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.",
  },
];

const Articles = () => {
  return (
    <div className="container articles">
      <h3 className="head">Latest articles</h3>
      <div className="flex flex-row flex-wrap gap-10 justify-content-between items">
        {articlesData.map((article, index) => (
          <div key={index} className="article">
            <div className="article-image">
              <img src={article.image} alt="article " />
            </div>
            <div className="pad-10">
              <span className="author">{article.author}</span>
              <h3>{article.title}</h3>
              <p>{article.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Articles;
