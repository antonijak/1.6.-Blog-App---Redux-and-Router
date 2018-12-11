import React from "react";
import PropTypes from "prop-types";
import "./Button.css";

const CancelButton = props => {
  return (
    <button className="main-button" id={props.id}>
      {props.title}
    </button>
  );
};

export default CancelButton;

CancelButton.propTypes = {
  handleClick: PropTypes.func,
  id: PropTypes.string,
  title: PropTypes.string
};
