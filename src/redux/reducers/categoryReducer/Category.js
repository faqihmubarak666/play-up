const initialState = {
  allCategory: [],
};

const Category = (state = initialState, action) => {
  switch (action.type) {
    case "GET_CATEGORY":
      return { ...state, allCategory: action.data };
    default:
      return state;
  }
};

export default Category;
