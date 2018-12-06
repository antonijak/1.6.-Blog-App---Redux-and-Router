import React from "react";
import { Link } from "react-router-dom";
import Button from "./Button";
import ChangeButton from "./ChangeButton";
import "./PostPreview.css";

const PostPreview = props => {
  let post = props.posts.find(post => {
    return post.id === props.match.params.id && post;
  });
  return (
    <div className="post-preview">
      <Link to="/posts">
        <Button title="Back to Posts" id="back-to-posts" />
      </Link>

      <div className="post-body">
        <div className="post-image-container">
          <img src={post.image} className="post-preview-image" alt="post-pic" />
        </div>
        <div className="title-and-category-container">
          <h2 className="post-title">{post.title}</h2>
          <span className="post-category">{post.category}</span>
        </div>

        <p className="post-text">{post.text}</p>
        <div className="buttons-container">
          <Link to="/posts/newpost">
            <ChangeButton
              id="edit-post"
              handleClick={props.providePostToEdit}
              postId={post.id}
              title="Edit"
            />
          </Link>
          <Link to="/posts">
            <ChangeButton
              id="delete-post"
              handleClick={props.deletePost}
              postId={post.id}
              title="Delete"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PostPreview;
