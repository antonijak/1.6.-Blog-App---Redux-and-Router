import React from "react";
import { Link } from "react-router-dom";
import Button from "./Button";
import "./NewPost.css";
import CustomDropdown from "./CustomDropdown";
import Tooltip from "./Tooltip";

const NewPost = props => {
  let validate =
    props.newPost.title !== "" && props.newPost.text !== "" ? false : true;

  !validate && props.showTooltip("invisible");
  return (
    <div className="add-new-post">
      <div className="title-and-category">
        <input
          className="input-default"
          type="text"
          name="title"
          id="new-post-title"
          placeholder="Your title here*"
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
      <input
        type="url"
        name="image"
        className="input-default"
        placeholder="Image url"
        id="image-input"
        value={props.newPost.image}
        onChange={e => {
          props.handleInput(e);
        }}
      />

      <div className="textarea-container">
        <textarea
          name="text"
          id="new-post-text"
          rows="16"
          placeholder="Write new post*"
          value={props.newPost.text}
          onChange={e => {
            props.handleInput(e);
          }}
        />
      </div>
      <div
        className="new-post-buttons-container"
        onMouseOver={() => {
          if (validate) {
            props.showTooltip("visible");
          } else {
            props.showTooltip("invisible");
          }
        }}
      >
        <Tooltip
          id="tooltip"
          text="To publish new post you must fill both title and post body"
          className={props.tooltip}
        />
        <Link to="/posts">
          <Button
            title="Save"
            id="save-new-post"
            handleClick={props.addPost}
            disabled={validate}
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
