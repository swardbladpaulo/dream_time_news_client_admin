const rootReducer = (state = {}, action) => {
  switch (action.type) {
    case "SET_CURRENT_USER":
      return {
        ...state,
        currentUser: action.payload,
        auth: { message: "You are logged in", status: true },
      };
    case "SET_ARTICLE_MESSAGE":
      return {
        ...state,
        createArticleMessage: action.payload
      }

    case "SET_ERROR_MESSAGE":
      return {
        ...state,
        errorMessage: action.payload
      }
    default:
      return state;
  }
};

export default rootReducer;
