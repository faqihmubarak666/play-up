import React from "react";
import { render } from "@testing-library/react";
import { shallow } from "enzyme";
import App from "./App";
import SignInForm from "./pages/landingPage/signIn/SignInForm";
import Users from "./redux/reducers/userReducer/Users";
import Schedule from "./redux/reducers/scheduleReducer/Schedule";
import Feature from "./redux/reducers/featureReducer/Feature";
import Category from "./redux/reducers/categoryReducer/Category";
import {
  getAllUsers,
  getUserById,
  getUserImageById,
} from "./pages/admin/users/UserServiceAPI";
import {
  getAllSchedule,
  getScheduleById,
} from "./pages/admin/scheduleMatch/ScheduleService";
import {
  getAllFeature,
  createFeature,
  updateFeature,
  deleteFeature,
  getFeatureById,
  uploadApiFeature,
} from "./pages/admin/features/FeatureService";

import {
  getAllCategory,
  createCategory,
  updateCategory,
  deleteCategory,
  getCategoryById,
  uploadApiCategory,
} from "./pages/admin/category/CategoryService";

import UserContainer from "./pages/admin/users/UserContainer";

const setup = (props = {}, state = null) => {
  const appComponent = shallow(<App {...props} />);
  if (state) appComponent.setState(state);
  return appComponent;
};

const findByAttribute = (appComponent, value) => {
  return appComponent.find(`[data-test="${value}"]`);
};

describe("<App />", () => {
  it("should components is called least once", () => {
    const appComponent = setup();
    expect(appComponent.find("[data-test='component-app']").length).toEqual(1);
  });
});

const setupSignForm = (props = {}, state = null) => {
  const signInComponent = shallow(<SignInForm {...props} />);
  if (state) signInComponent.setState(state);
  return signInComponent;
};

const findByAttributeSignForm = (signInComponent, value) => {
  return signInComponent.find(`[data-test="${value}"]`);
};

describe("<SignInForm />", () => {
  it("should components is called least once", () => {
    const signInComponent = setupSignForm();
    expect(
      signInComponent.find(`[data-test="component-signin"]`).length
    ).toEqual(1);
  });

  it("Change handle input username", () => {
    const handleChange = jest.fn();
    const signInComponent = shallow(
      <SignInForm handleChangeInput={handleChange} />
    );

    const event = "username";

    signInComponent
      .find(`[data-test="input-username"]`)
      .simulate("Change", event);
    expect(handleChange).toHaveBeenCalledWith("username");
  });

  it("Change handle input password", () => {
    const handleChange = jest.fn();
    const signInComponent = shallow(
      <SignInForm handleChangeInput={handleChange} />
    );

    const event = "123";

    signInComponent
      .find(`[data-test="input-password"]`)
      .simulate("Change", event);
    expect(handleChange).toHaveBeenCalledWith("123");
  });
});

describe("Users", () => {
  it("Should return new state if receiving type", () => {
    const allUserData = [
      { username: "Test 1" },
      { username: "Test 2" },
      { username: "Test 3" },
    ];

    const newState = Users(undefined, {
      type: "GET_USER",
      data: allUserData,
    });
    expect(newState.allUser).toEqual(allUserData);
  });

  it("Should return new state if receiving type", () => {
    const adminData = { username: "Admin", password: "123" };

    const newState = Users(undefined, {
      type: "GET_ADMIN",
      data: adminData,
    });
    expect(newState.admin).toEqual(adminData);
  });

  it("Should return new state if receiving type", () => {
    const userByIdData = {
      username: "Faqih",
      password: "123",
      email: "faqihmubarak@gmail.com",
    };

    const newState = Users(undefined, {
      type: "GET_USER_BY_ID",
      data: userByIdData,
    });
    expect(newState.userById).toEqual(userByIdData);
  });
});

describe("Schedule", () => {
  it("Should return new state if receiving type", () => {
    const allScheduleData = [
      { playerOne: "Andi", playerTwo: "Bowo", location: "Senayan" },
      { playerOne: "Intan", playerTwo: "Seila", location: "Gor Bekasi" },
    ];

    const newState = Schedule(undefined, {
      type: "GET_SCHEDULE",
      data: allScheduleData,
    });
    expect(newState.allSchedule).toEqual(allScheduleData);
  });
});

describe("Feature", () => {
  it("Should return new state if receiving type", () => {
    const allFeatureData = [
      { nameFeature: "Chatting", descriptionFeature: "Feature chatting" },
      {
        nameFeature: "Find Opponent",
        descriptionFeature: "Feature Find Opponent",
      },
    ];

    const newState = Feature(undefined, {
      type: "GET_FEATURE",
      data: allFeatureData,
    });
    expect(newState.allFeature).toEqual(allFeatureData);
  });
});

describe("Category", () => {
  it("Should return new state if receiving type", () => {
    const allCategoryData = [
      { nameCategory: "Badminton" },
      {
        nameCategory: "Basket",
      },
    ];

    const newState = Category(undefined, {
      type: "GET_CATEGORY",
      data: allCategoryData,
    });
    expect(newState.allCategory).toEqual(allCategoryData);
  });
});

describe("UserServiceAPI ", () => {
  it("API testing", async () => {
    fetch.mockResponseOnce(
      JSON.stringify({
        data: [
          { username: "Faqih", password: "***" },
          { username: "joko", password: "***" },
        ],
      })
    );

    const fetchData = await getAllUsers("data");
    expect(fetchData).toEqual({
      data: [
        { username: "Faqih", password: "***" },
        { username: "joko", password: "***" },
      ],
    });
  });

  it("API testing", async () => {
    fetch.mockResponseOnce(
      JSON.stringify({ id: { username: "Faqih", password: "***" } })
    );

    const fetchData = await getUserById("id");
    expect(fetchData).toEqual({ id: { username: "Faqih", password: "***" } });
  });
});

describe("scheduleMatchServiceAPI ", () => {
  it("API testing", async () => {
    fetch.mockResponseOnce(
      JSON.stringify({
        data: [
          { playerOne: "Faqih", win: "5" },
          { playerTwo: "joko", win: "3" },
        ],
      })
    );

    const fetchData = await getAllSchedule("data");
    expect(fetchData).toEqual({
      data: [
        { playerOne: "Faqih", win: "5" },
        { playerTwo: "joko", win: "3" },
      ],
    });
  });

  it("API testing", async () => {
    fetch.mockResponseOnce(
      JSON.stringify({
        id: { playerOne: "Faqih", playerTwo: "joko", at: "Gor Bekasi" },
      })
    );

    const fetchData = await getScheduleById("id");
    expect(fetchData).toEqual({
      id: { playerOne: "Faqih", playerTwo: "joko", at: "Gor Bekasi" },
    });
  });
});

describe("featureServiceAPI ", () => {
  it("API testing", async () => {
    fetch.mockResponseOnce(
      JSON.stringify({
        data: [
          {
            featureName: "Chatting",
            featureDescription: "Chatting with opponent",
          },
          {
            featureName: "Finf Opponent",
            featureDescription: "Makes it easier for you to find your opponent",
          },
        ],
      })
    );

    const fetchData = await getAllFeature("data");
    expect(fetchData).toEqual({
      data: [
        {
          featureName: "Chatting",
          featureDescription: "Chatting with opponent",
        },
        {
          featureName: "Finf Opponent",
          featureDescription: "Makes it easier for you to find your opponent",
        },
      ],
    });
  });
});

describe("categoryServiceAPI ", () => {
  it("API testing", async () => {
    fetch.mockResponseOnce(
      JSON.stringify({
        data: [
          {
            categoryName: "Badminton",
          },
          {
            categoryName: "Basket",
          },
        ],
      })
    );

    const fetchData = await getAllCategory("data");
    expect(fetchData).toEqual({
      data: [
        {
          categoryName: "Badminton",
        },
        {
          categoryName: "Basket",
        },
      ],
    });
  });

  it("Path API getAllCategory", async () => {
    global.fetch = jest.fn(() =>
      Promise.resolve({
        json: () => Promise.resolve("data"),
      })
    );
    await getAllCategory("data");

    const url = "/category";
    const method = {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    };
    expect(fetch).toHaveBeenCalledWith(url, method);
  });

  it("Path API createCategory", async () => {
    global.fetch = jest.fn(() =>
      Promise.resolve({
        json: () => Promise.resolve("data"),
      })
    );
    await createCategory("data");

    const url = "/category/create";
    const method = {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify("data"),
    };
    expect(fetch).toHaveBeenCalledWith(url, method);
  });

  it("Path API updateCategory", async () => {
    global.fetch = jest.fn(() =>
      Promise.resolve({
        json: () => Promise.resolve("data"),
      })
    );
    await updateCategory("data");

    const url = "/category/update";
    const method = {
      method: "PUT",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify("data"),
    };
    expect(fetch).toHaveBeenCalledWith(url, method);
  });

  it("Path API deleteCategory", async () => {
    global.fetch = jest.fn(() =>
      Promise.resolve({
        json: () => Promise.resolve("id"),
      })
    );
    await deleteCategory("id");

    const url = "/category/delete/id";
    const method = {
      method: "DELETE",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    };
    expect(fetch).toHaveBeenCalledWith(url, method);
  });
});

describe("featureServiceAPI ", () => {
  it("Path API getAllFeature", async () => {
    global.fetch = jest.fn(() =>
      Promise.resolve({
        json: () => Promise.resolve("data"),
      })
    );
    await getAllFeature("data");

    const url = "/feature";
    const method = {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    };
    expect(fetch).toHaveBeenCalledWith(url, method);
  });

  it("Path API createFeature", async () => {
    global.fetch = jest.fn(() =>
      Promise.resolve({
        json: () => Promise.resolve("data"),
      })
    );
    await createFeature("data");

    const url = "/feature/create";
    const method = {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify("data"),
    };
    expect(fetch).toHaveBeenCalledWith(url, method);
  });

  it("Path API updateFeature", async () => {
    global.fetch = jest.fn(() =>
      Promise.resolve({
        json: () => Promise.resolve("data"),
      })
    );
    await updateFeature("data");

    const url = "/feature/update";
    const method = {
      method: "PUT",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify("data"),
    };
    expect(fetch).toHaveBeenCalledWith(url, method);
  });

  it("Path API deleteFeature", async () => {
    global.fetch = jest.fn(() =>
      Promise.resolve({
        json: () => Promise.resolve("id"),
      })
    );
    await deleteFeature("id");

    const url = "/feature/delete/id";
    const method = {
      method: "DELETE",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    };
    expect(fetch).toHaveBeenCalledWith(url, method);
  });
});
