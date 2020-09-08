const initialState = {
  allCategory: [],
  categoryById: {},
};

const Category = (state = initialState, action) => {
  switch (action.type) {
    case "GET_CATEGORY":
      return { ...state, allCategory: action.data };
    case "GET_CATEGORY_BY_ID":
      return { ...state, categoryById: action.data };
    default:
      return state;
  }
};

export default Category;
