import React from "react";
import { render } from "@testing-library/react";
import { shallow } from "enzyme";
import App from "./App";
import SignInForm from "./pages/landingPage/signIn/SignInForm";

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
