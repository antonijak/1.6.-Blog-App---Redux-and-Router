import * as actionTypes from "../actions/actionTypes";

let initialState = {
  posts: [
    {
      title: "My day in Integrify",
      category: "Work",
      id: "22",
      image: "http://placeimg.com/640/310/any",
      text:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
    },
    {
      title: "Lorem ipsum dolor sit amet",
      category: "Work",
      id: "32",
      image: "http://placeimg.com/640/200/any",
      text:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
    },
    {
      title: "Lorem Ipsum is simply dummy text of the printing",
      category: "Work",
      id: "42",
      image: "http://placeimg.com/700/400/any",
      text:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
    }
  ],
  newPost: {
    title: "",
    category: "Work",
    image: "",
    text: ""
  },
  isComingFromEdit: false,
  postToEditId: ""
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_POST:
      let post = action.payload;
      return { ...state, posts: [...state.posts, post] };
    case actionTypes.DELETE:
      let posts = action.payload;
      return { ...state, posts };
    case actionTypes.TAKE_INPUT_VALUES:
      let value = action.payload.value;
      let name = action.payload.name;
      return { ...state, newPost: { ...state.newPost, [name]: value } };
    case actionTypes.CHANGE_INPUT_VALUES:
      post = action.payload;
      return { ...state, newPost: post };
    case actionTypes.EMPTY_INPUT_VALUES:
      post = action.payload;
      return { ...state, newPost: post };
    case actionTypes.EDITING:
      return {
        ...state,
        isComingFromEdit: action.payload.bool,
        postToEditId: action.payload.postId
      };
    default:
      return state;
  }
};

export default reducer;
