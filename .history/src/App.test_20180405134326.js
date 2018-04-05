import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import ShallowWrapper from "enzyme/ShallowWrapper";
import until from "enzyme-shallow-until";
import { default as AppHoc, App } from "./App";
import { Fetch } from "react-data-fetching";

Enzyme.configure({ adapter: new Adapter() });
ShallowWrapper.prototype.until = until;

const setup = () => {
  return {
    wrapper: shallow(<AppHoc />).until(App)
  };
};
describe("App", () => {
  it("has t", () => {
    const { wrapper } = setup();
    expect(wrapper.find("select")).toBeTruthy();
    expect(wrapper.find("Fetch")).toBeTruthy();
  });
});
