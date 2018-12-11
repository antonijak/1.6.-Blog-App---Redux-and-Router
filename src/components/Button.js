import React from "react";
import PropTypes from "prop-types";
import "./Button.css";

const Button = props => {
  return (
    <button
      className={props.className}
      id={props.id}
      onClick={() => props.handleClick(props.value)}
    >
      <span id={props.plusId}>{props.plus}</span>
      {props.title}
    </button>
  );
};

export default Button;

Button.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string,
  handleClick: PropTypes.func,
  className: PropTypes.string
};
