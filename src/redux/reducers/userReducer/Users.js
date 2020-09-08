const initialState = {
  allUser: [],
  admin: {},
  userById: {},
};

const Users = (state = initialState, action) => {
  switch (action.type) {
    case "GET_USER":
      return { ...state, allUser: action.data };
    case "GET_ADMIN":
      return { ...state, admin: action.data };
    case "GET_USER_BY_ID":
      return { ...state, userById: action.data };
    default:
      return state;
  }
};

export default Users;
