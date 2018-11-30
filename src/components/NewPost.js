import React from "react";
import { Link } from "react-router-dom";
import Button from "./Button";
import AddPostButton from "./AddPostButton";
import "./NewPost.css";

const NewPost = props => {
  console.log(props);

  return (
    <div className="add-new-post">
      <div className="title-and-category">
        <label htmlFor="new-post-title">Title:</label>
        <input
          type="text"
          name="title"
          id="new-post-title"
          placeholder="Your title here"
          value={props.newPost.title}
          onChange={e => {
            props.handleInput(e);
          }}
        />
        <label htmlFor="select-category" id="select-category-label">
          Category:
        </label>
        <select
          name="category"
          value={props.newPost.category}
          id="select-category"
          onChange={e => {
            props.handleInput(e);
          }}
        >
          <option>Work</option>
          <option>Speech</option>
          <option>Recreation</option>
          <option>Sport</option>
        </select>
      </div>
      <div className="textarea-container">
        <label htmlFor="new-post-text" className="new-post-text-label">
          Write new post:
        </label>
        <textarea
          name="text"
          id="new-post-text"
          rows="20"
          value={props.newPost.text}
          onChange={e => {
            props.handleInput(e);
          }}
        />
      </div>
      <div className="new-post-buttons-container">
        <Link to="/posts">
          <AddPostButton
            title="Save"
            id="save-new-post"
            handleClick={props.addPost}
          />
        </Link>

        <Link to="/posts">
          <Button title="Cancel" id="cancel-new-post" />
        </Link>
      </div>
    </div>
  );
};

export default NewPost;
