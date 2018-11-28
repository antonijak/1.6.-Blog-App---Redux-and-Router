import React from "react";
import PropTypes from "prop-types";

const PostImage = props => {
  return <img src={props.postImage} alt={props.imageDescription} />;
};

export default PostImage;

PostImage.propTypes = {
  postImage: PropTypes.string,
  imageDescription: PropTypes.string
};
