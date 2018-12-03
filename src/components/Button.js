import React from "react";
import PropTypes from "prop-types";
import "./Button.css";

const Button = props => {
  return (
    <button className="main-button" id={props.id} onClick={props.handleClick}>
      {props.title}
    </button>
  );
};

export default Button;

Button.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string
};
