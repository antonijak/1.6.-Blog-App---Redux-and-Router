import React from "react";
import "./PostItem.css";
import PostImage from "./PostImage";
import Avatar from "./Avatar";

const PostItem = props => {
  return (
    <div className="post-item">
      <PostImage imageDescription="some pic" />
      <h3 className="post-item-title">{props.title}</h3>
      <div className="category-container">
        <div className="author">
          <Avatar />
          <span>Integrify Student</span>
        </div>

        <span className="post-item-category">{props.category}</span>
      </div>
    </div>
  );
};

export default PostItem;
