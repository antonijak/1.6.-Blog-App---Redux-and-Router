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

export const clearInputValues = post => {
  return {
    type: actionTypes.CLEAR_INPUT_VALUES,
    payload: post
  };
};
