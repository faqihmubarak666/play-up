const initialState = {
  allUser: [],
  admin: {},
};

const Users = (state = initialState, action) => {
  switch (action.type) {
    case "GET_USER":
      return { ...state, allUser: action.data };
    case "GET_ADMIN":
      console.log("redux data admin", action.data);
      return { ...state, admin: action.data };
    default:
      return state;
  }
};

export default Users;
