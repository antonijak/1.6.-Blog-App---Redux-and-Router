import React from "react";
import PropTypes from "prop-types";
import "./Button.css";

const AddPostBtn = props => {
  return (
    <button className="main-button" id={props.id} onClick={props.handleClick}>
      {props.title}
    </button>
  );
};

export default AddPostBtn;

AddPostBtn.propTypes = {};
