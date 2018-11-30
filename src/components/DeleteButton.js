import React from "react";
import PropTypes from "prop-types";
import "./Button.css";

const DeleteButton = props => {
  console.log("button", props);

  return (
    <button
      className="main-button"
      id={props.id}
      onClick={() => {
        props.handleClick(props.postId);
      }}
    >
      Delete
    </button>
  );
};

export default DeleteButton;

DeleteButton.propTypes = {
  handleClick: PropTypes.func,
  id: PropTypes.string,
  title: PropTypes.string
};
