const initialState = {
  allUser: [],
};

const Users = (state = initialState, action) => {
  switch (action.type) {
    case "GET_USER":
      return { ...state, allUser: action.data };
    default:
      return state;
  }
};

export default Users;
