import React from "react";
import { Link } from "react-router-dom";
import Button from "./Button";
import "./NewPost.css";

const NewPost = props => {
  return (
    <div className="add-new-post">
      <div className="title-and-category">
        <label htmlFor="new-post-title">Title:</label>
        <input
          type="text"
          id="new-post-title"
          placeholder="Your title here"
          value={props.value}
          onChange={e => {
            props.handleChange(e);
          }}
        />
        <label htmlFor="select-category" id="select-category-label">
          Category:
        </label>
        <select
          id="select-category"
          onChange={e => {
            props.handleChange(e);
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
        <textarea id="new-post-text" rows="20" />
      </div>
      <div className="new-post-buttons-container">
        <Link to="/posts">
          <Button title="Save" id="save-new-post" />
        </Link>

        <Link to="/posts">
          <Button title="Cancel" id="cancel-new-post" />
        </Link>
      </div>
    </div>
  );
};

export default NewPost;
