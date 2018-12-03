import React from "react";
import PropTypes from "prop-types";
import "./PostImage.css";

const PostImage = props => {
  return (
    <img
      src={props.imageSource}
      alt={props.imageDescription}
      className="post-image"
    />
  );
};

export default PostImage;

PostImage.propTypes = {
  postImage: PropTypes.string,
  imageDescription: PropTypes.string
};
