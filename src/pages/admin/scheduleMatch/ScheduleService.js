const baseUrl = "/schedule";

const getAllSchedule = async (page, limit) => {
  const queryParamns = `${baseUrl}/all?page=${page}&limit=${limit}`;

  const schedule = await fetch(queryParamns, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  });
  return await schedule.json();
};

const getScheduleById = async (id) => {
  const schedule = await fetch(baseUrl + `/active/${id}`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  });
  return await schedule.json();
};

export { getAllSchedule, getScheduleById };
