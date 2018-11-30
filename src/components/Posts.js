import React from "react";
import Button from "./Button";
import PostItem from "./PostItem";
import { Link } from "react-router-dom";
import "./Posts.css";

const Posts = props => {
  return (
    <div className="home">
      <Link to="/posts/newpost">
        <Button title="ADD POST" />
      </Link>

      {props.posts.map((post, i) => (
        <Link
          to={"/posts/" + post.id}
          className="post-item-container"
          key={i + "key"}
        >
          <PostItem title={post.title} category={post.category} id={post.id} />
        </Link>
      ))}
    </div>
  );
};

export default Posts;
