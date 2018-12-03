import React from "react";
import PropTypes from "prop-types";
import "./CustomDropdown.css";

const CustomDropdown = props => {
  return (
    <div className="custom-dropdown">
      <select
        name="category"
        onChange={e => {
          props.handleInput(e);
        }}
      >
        <option>Recreation</option>
        <option>Speech</option>
        <option>Work</option>
        <option>Sport</option>
      </select>
    </div>
  );
};

export default CustomDropdown;

CustomDropdown.propTypes = {
  getTransactionType: PropTypes.func
};
