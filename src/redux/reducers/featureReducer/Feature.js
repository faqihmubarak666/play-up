const initialState = {
  allFeature: [],
  featureById: {},
};

const Feature = (state = initialState, action) => {
  switch (action.type) {
    case "GET_FEATURE":
      return { ...state, allFeature: action.data };
    case "GET_FEATURE_BY_ID":
      return { ...state, featureById: action.data };
    default:
      return state;
  }
};

export default Feature;
