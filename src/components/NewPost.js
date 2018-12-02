import React from "react";
import { Link } from "react-router-dom";
import Button from "./Button";
import AddPostButton from "./AddPostButton";
import "./NewPost.css";
import CustomDropdown from "./CustomDropdown";

const NewPost = props => {
  console.log(props);

  return (
    <div className="add-new-post">
      <div className="title-and-category">
        <input
          className="input-default"
          type="text"
          name="title"
          id="new-post-title"
          placeholder="Your title here"
          value={props.newPost.title}
          onChange={e => {
            props.handleInput(e);
          }}
        />
        <CustomDropdown
          value={props.newPost.category}
          id="select-category"
          handleInput={props.handleInput}
        />
      </div>
      <div className="textarea-container">
        <textarea
          name="text"
          id="new-post-text"
          rows="20"
          placeholder="Write new post"
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
