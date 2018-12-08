import React from "react";
import PropTypes from "prop-types";
import "./PostImage.css";

const PostImage = props => {
  return (
    <figure className="post-item-image-container">
      <img
        src={props.imageSource}
        alt={props.imageDescription}
        className="post-image"
      />
    </figure>
  );
};

export default PostImage;

PostImage.propTypes = {
  postImage: PropTypes.string,
  imageDescription: PropTypes.string
};
