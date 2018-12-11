import React from "react";
import { Link } from "react-router-dom";
import Button from "./Button";
import BackButton from "./BackButton";
import "./PostPreview.css";

const PostPreview = props => {
  let post = props.posts.find(post => {
    return post.id === props.match.params.id && post;
  });
  return (
    <article className="post-preview">
      <Link to="/posts" id="back-to-posts-link">
        <BackButton
          title="Back to Posts"
          id="back-to-posts"
          className="main-button"
        />
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
            <Button
              id="edit-post"
              handleClick={props.providePostToEdit}
              value={post.id}
              title="Edit"
              className="main-button"
            />
          </Link>

          <Link to="/posts">
            <Button
              id="delete-post"
              handleClick={props.deletePost}
              value={post.id}
              title="Delete"
              className="main-button"
            />
          </Link>
        </div>
      </div>
    </article>
  );
};

export default PostPreview;
