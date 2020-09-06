const initialState = {
  allFeature: [],
};

const Feature = (state = initialState, action) => {
  switch (action.type) {
    case "GET_FEATURE":
      return { ...state, allFeature: action.data };
    default:
      return state;
  }
};

export default Feature;
