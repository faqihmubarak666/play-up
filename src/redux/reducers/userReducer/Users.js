const initialState = {
  allUser: [],
  admin: {},
  userById: {},
  userImageById: {},
};

const Users = (state = initialState, action) => {
  switch (action.type) {
    case "GET_USER":
      return { ...state, allUser: action.data };
    case "GET_ADMIN":
      return { ...state, admin: action.data };
    case "GET_USER_BY_ID":
      return { ...state, userById: action.data };
    case "GET_USER_IMAGE_BY_ID":
      return { ...state, userImageById: action.data };
    default:
      return state;
  }
};

export default Users;
