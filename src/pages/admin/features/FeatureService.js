const baseUrl = "/feature";

const getAllFeature = async () => {
  const feature = await fetch(baseUrl, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  });
  return await feature.json();
};

const createFeature = async (form) => {
  const feature = await fetch(baseUrl + "/create", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(form),
  });
  return await feature.json();
};

const updateFeature = async (form) => {
  const feature = await fetch(baseUrl + "/update", {
    method: "PUT",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(form),
  });
  return await feature.json();
};

const deleteFeature = async (id) => {
  const feature = await fetch(baseUrl + `/delete/${id}`, {
    method: "DELETE",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  });

  return feature.json();
};

const getFeatureById = async (id) => {
  const feature = await fetch(baseUrl + `/${id}`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  });
  return await feature.json();
};

export {
  getAllFeature,
  createFeature,
  updateFeature,
  deleteFeature,
  getFeatureById,
};
