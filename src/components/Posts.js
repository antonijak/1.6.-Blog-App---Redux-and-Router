import React from "react";
import AddPostButton from "./AddPostButton";
import PostItem from "./PostItem";
import { Link } from "react-router-dom";
import "./Posts.css";

const Posts = props => {
  return (
    <div className="posts">
      <Link to="/posts/newpost" id="add-post-button">
        <AddPostButton title="ADD POST" />
      </Link>

      {props.posts.map((post, i) => (
        <Link
          to={"/posts/" + post.id}
          className="post-item-container"
          key={i + "key"}
        >
          <PostItem
            title={post.title}
            category={post.category}
            id={post.id}
            imageSource={post.image}
          />
        </Link>
      ))}
    </div>
  );
};

export default Posts;
