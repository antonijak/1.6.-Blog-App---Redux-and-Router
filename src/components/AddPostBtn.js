import React from "react";
import PropTypes from "prop-types";
import "./AddPostBtn.css";

const AddPostBtn = props => {
  return (
    <button id="add-post-btn" onClick={props.addNewPost}>
      ADD POST
    </button>
  );
};

export default AddPostBtn;

AddPostBtn.propTypes = {};
