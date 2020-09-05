const baseUrl = "/category";

const getAllCategory = async () => {
  const category = await fetch(baseUrl, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  });
  return await category.json();
};

const createCategory = async (form) => {
  const category = await fetch(baseUrl + "/create", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(form),
  });
  return await category.json();
};

const updateCategory = async (form) => {
  const category = await fetch(baseUrl + "/update", {
    method: "PUT",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(form),
  });
  return await category.json();
};

const deleteCategory = async (id) => {
  const category = await fetch(baseUrl + `/delete/${id}`, {
    method: "DELETE",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  });

  return category.json();
};

export { getAllCategory, createCategory, updateCategory, deleteCategory };
