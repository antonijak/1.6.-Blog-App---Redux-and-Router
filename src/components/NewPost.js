import React, { Component } from "react";
import { Link } from "react-router-dom";
import Button from "./Button";
import BackButton from "./BackButton";
import "./NewPost.css";
import CustomDropdown from "./CustomDropdown";
import Tooltip from "./Tooltip";

class NewPost extends Component {
  handleSubmit = () => {
    if (this.props.validateInputs()) {
      this.props.addNewPost();
      this.props.history.push("/posts");
    }
  };
  render() {
    return (
      <div className="add-new-post">
        <div className="title-and-category">
          <input
            className="input-default"
            type="text"
            name="title"
            id="new-post-title"
            placeholder="Your title here*"
            value={this.props.newPost.title}
            onChange={e => {
              this.props.handleInput(e);
            }}
          />
          <CustomDropdown
            value={this.props.newPost.category}
            id="select-category"
            handleInput={this.props.handleInput}
          />
        </div>
        <input
          type="url"
          name="image"
          className="input-default"
          placeholder="Image url"
          id="image-input"
          value={this.props.newPost.image}
          onChange={e => {
            this.props.handleInput(e);
          }}
        />

        <div className="textarea-container">
          <textarea
            name="text"
            id="new-post-text"
            rows="16"
            placeholder="Write new post*"
            value={this.props.newPost.text}
            onChange={e => {
              this.props.handleInput(e);
            }}
          />
        </div>
        <div className="new-post-buttons-container">
          <Tooltip
            id="tooltip"
            text="To publish new post you must fill both title and post body"
            className={this.props.tooltip}
          />
          <Button
            title="Save"
            id="save-new-post"
            handleClick={this.handleSubmit}
            className="main-button"
          />

          <Link to="/posts">
            <BackButton
              title="Cancel"
              id="cancel-new-post"
              className="main-button"
            />
          </Link>
        </div>
      </div>
    );
  }
}

export default NewPost;
