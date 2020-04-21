const init_state = {
  username: "Doraemon",
  id: 0
};

export default (state = init_state, action) => {
  if (action.type === "ON_CHANGE_USERNAME") {
    return { ...state, username: action.payload };
  } else {
    return { ...state };
  }
};
