const init_state = {
  username: ``,
  id: 0
};

export default (state = init_state, action) => {
  if (action.type === "ON_CHANGE_USERNAME") {
    return { ...state, username: `Welcome, ${action.payload}` };
  } else {
    return { ...state };
  }
};
