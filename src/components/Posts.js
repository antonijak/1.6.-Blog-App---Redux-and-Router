import React from "react";
import Button from "./Button";
import PostItem from "./PostItem";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import "./Posts.css";

const Posts = props => {
  let reversedPosts = [...props.posts].reverse();
  return (
    <div className="posts">
      <Link
        to="/posts/newpost"
        id="add-post-button"
        onClick={() => {
          props.showTooltip("invisible");
        }}
      >
        <Button
          title="ADD POST"
          handleClick={props.setCreatingNotEditing}
          className="add-post-button"
          value={false}
          plus="+"
          plusId="plus"
        />
      </Link>
      <div className="post-list-container">
        {reversedPosts.map((post, i) => (
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
    </div>
  );
};

export default Posts;

Posts.propTypes = {
  posts: PropTypes.array,
  showTooltip: PropTypes.func,
  setCreatingNotEditing: PropTypes.func
};
