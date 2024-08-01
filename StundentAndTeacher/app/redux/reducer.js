const INITIAL_STATE = {
  globalEmail: "student",
  globalPassword: "123",
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "SET_GLOBALEMAIL":
      return { ...state, globalEmail: action.payload };
    case "SET_GLOBALPASSWROD":
      return { ...state, globalPassword: action.payload };

    default:
      return state;
  }
};
