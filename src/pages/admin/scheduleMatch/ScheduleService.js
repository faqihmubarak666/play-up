const baseUrl = "/schedule";

const getAllSchedule = async () => {
  const schedule = await fetch(baseUrl + "/all", {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  });
  return await schedule.json();
};

export { getAllSchedule };
