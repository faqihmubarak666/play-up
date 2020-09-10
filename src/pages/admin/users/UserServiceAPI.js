const baseUrl = "/user";

const getAllUsers = async (page, limit) => {
  const queryParamns = `${baseUrl}/users?page=${page - 1}&limit=${limit}`;

  const users = await fetch(queryParamns, {
    method: "GET",
    headers: {
      token: sessionStorage.getItem("token"),
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  });
  return await users.json();
};

const getUserById = async (id) => {
  const user = await fetch(baseUrl + `/${id}`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  });
  return await user.json();
};

export { getAllUsers, getUserById };
