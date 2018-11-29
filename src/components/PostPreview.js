import React from "react";
import { Link } from "react-router-dom";
import Button from "./Button";
import "./PostPreview.css";

const PostPreview = props => {
  console.log(props);
  return (
    <div className="post-preview">
      <div className="buttons-container">
        <Link to="/posts">
          <Button title="Back to Posts" id="back-to-posts" />
        </Link>
        <Link to="/posts">
          <Button title="Delete Post" id="delete-post" />
        </Link>
      </div>
      <h1 className="post-title">{props.location.state.title}</h1>
      <span className="post-category">
        Category: {props.location.state.category}
      </span>
      <p className="post-text">{props.location.state.text}</p>
    </div>
  );
};

export default PostPreview;
