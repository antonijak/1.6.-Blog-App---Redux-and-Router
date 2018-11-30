import React from "react";
import PropTypes from "prop-types";

const AddPostButton = props => {
  console.log("button", props);

  return (
    <button
      className="main-button"
      id={props.id}
      onClick={() => {
        props.handleClick();
      }}
    >
      {props.title}
    </button>
  );
};

export default AddPostButton;

AddPostButton.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string
};
