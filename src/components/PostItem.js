import React from "react";
import "./PostItem.css";

const PostItem = props => {
  return (
    <div className="post-item">
      <h2>{props.title}</h2>
      <span>{props.category}</span>
    </div>
  );
};

export default PostItem;
