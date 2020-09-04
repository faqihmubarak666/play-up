const initialState = {
  allSchedule: [],
};

const Schedule = (state = initialState, action) => {
  switch (action.type) {
    case "GET_SCHEDULE":
      return { ...state, allSchedule: action.data };
    default:
      return state;
  }
};

export default Schedule;
