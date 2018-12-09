import * as actionTypes from "./actionTypes";

export const addPost = post => {
  return {
    type: actionTypes.ADD_POST,
    payload: post
  };
};

export const deletePost = post => {
  return {
    type: actionTypes.DELETE,
    payload: post
  };
};

export const takeInputValues = (value, name) => {
  return {
    type: actionTypes.TAKE_INPUT_VALUES,
    payload: {
      value,
      name
    }
  };
};

export const changeInputValues = post => {
  return {
    type: actionTypes.CHANGE_INPUT_VALUES,
    payload: post
  };
};

export const emptyInputValues = () => {
  return {
    type: actionTypes.EMPTY_INPUT_VALUES,
    payload: {
      title: "",
      category: "Recreation",
      text: "",
      image: ""
    }
  };
};

export const isEditing = (bool, postId) => {
  return {
    type: actionTypes.EDITING,
    payload: {
      bool,
      postId
    }
  };
};

export const showTooltip = className => {
  return {
    type: actionTypes.SHOW_TOOLTIP,
    payload: className
  };
};
