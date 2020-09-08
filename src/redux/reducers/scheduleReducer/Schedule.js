const initialState = {
  allSchedule: [],
  scheduleById: {},
};

const Schedule = (state = initialState, action) => {
  switch (action.type) {
    case "GET_SCHEDULE":
      return { ...state, allSchedule: action.data };
    case "GET_SCHEDULE_BY_ID":
      return { ...state, scheduleById: action.data };
    default:
      return state;
  }
};

export default Schedule;
