import React from "react";
import PropTypes from "prop-types";
import "./Avatar.css";

const Avatar = props => {
  return (
    <img src="http://i.pravatar.cc/30" alt="post-avatar" className="avatar" />
  );
};

export default Avatar;

Avatar.propTypes = {
  postImage: PropTypes.string,
  imageDescription: PropTypes.string
};
