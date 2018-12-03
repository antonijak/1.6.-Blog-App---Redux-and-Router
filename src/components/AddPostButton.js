import React from "react";
import PropTypes from "prop-types";
import "./AddPostButton.css";

const AddPostButton = props => {
  return (
    <button className="add-post-button" id={props.id}>
      <span id="plus">+</span> ADD POST
    </button>
  );
};

export default AddPostButton;

AddPostButton.propTypes = {
  id: PropTypes.string
};
