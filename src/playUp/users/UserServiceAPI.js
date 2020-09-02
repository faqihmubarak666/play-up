const baseUrl = "/user";

const getAllUsers = async () => {
  const users = await fetch(baseUrl + "/users", {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  });
  return await users.json();
};

export { getAllUsers };
