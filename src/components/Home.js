import React from "react";
import "./Home.css";
import image from "../images/blog-image.jpg";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div id="home">
      <h1 id="home-main-title">Welcome to Blog App</h1>
      <Link to="/posts" id="blog-picture-link">
        <img src={image} alt="blog" id="blog-picture" />
      </Link>
    </div>
  );
};

export default Home;
