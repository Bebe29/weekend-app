const init_state = {
  username: "",
  fullName: "",
  role: "",
  id: 0,
  // testing: "",
  // testing2: "",
  errMsg: ""
};

export default (state = init_state, action) => {
  // if (action.type === "ON_CHANGE_USERNAME") {
  //   return { ...state, username: `Welcome, ${action.payload}` };
  // } else if (action.type === "TESTING") {
  //   return { ...state, testing: action.payload };
  // } else if (action.type === "TESTING2") {
  //   return { ...state, testing2: action.payload };
  // }
  if (action.type === "ON_CHANGE_USERNAME") {
    return { ...state, username: action.payload };
  } else if (action.type === "ON_LOGIN_SUCCESS") {
    const { username, fullName, role, id } = action.payload;
    return { ...state, username, fullName, role, id, errMsg: "" };
  } else if (action.type === "ON_LOGIN_FAIL") {
    return { ...state, errMsg: action.payload };
  } else if (action.type === "ON_REGISTER_SUCCESS") {
    const { username, fullName, role, id } = action.payload;
    return { ...state, username, fullName, role, id, errMsg: "" };
  } else if (action.type === "ON_REGISTER_FAIL") {
    return { ...state, errMsg: action.payload };
  } else if (action.type === "ON_LOGOUT_SUCCESS") {
    const { username, fullName, role, errMsg } = action.payload;
    return { ...state, username, fullName, role, errMsg, id: 0 };
  }
  return { ...state };
};
