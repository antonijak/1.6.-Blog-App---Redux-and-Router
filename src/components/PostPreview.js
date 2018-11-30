import React from "react";
import { Link, withRouter } from "react-router-dom";
import Button from "./Button";
import DeleteButton from "./DeleteButton";
import "./PostPreview.css";

const PostPreview = props => {
  let post = props.posts.find(post => {
    return post.id === props.match.params.id && post;
  });
  return (
    <div className="post-preview">
      <div className="buttons-container">
        <Link to="/posts">
          <Button title="Back to Posts" id="back-to-posts" />
        </Link>

        <Link to="/posts">
          <DeleteButton
            id="delete-post"
            handleClick={props.deletePost}
            postId={post.id}
            title="Delete Post"
          />
        </Link>
      </div>

      <h1 className="post-title">{post.title}</h1>

      <span className="post-category">Category: {post.category}</span>

      <p className="post-text">{post.text}</p>
    </div>
  );
};

export default withRouter(PostPreview);
